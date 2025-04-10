from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
from weasyprint import HTML
import os
from io import BytesIO

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": [
    "http://localhost:5173",
    "https://nishantksingh0.github.io"
]}})

@app.route('/generate-pdf', methods=['POST'])
def generate_pdf():
    data = request.get_json()
    
    html_content = data.get('html')
    if not html_content:
        return jsonify({'error': 'No HTML content provided'}), 400

    # Generate PDF in memory
    pdf_file = BytesIO()
    HTML(string=html_content).write_pdf(pdf_file)
    pdf_file.seek(0)

    return send_file(
        pdf_file,
        mimetype='application/pdf',
        as_attachment=True,
        download_name='resume.pdf'
    )


if __name__ == '__main__':
    app.run(debug=True)
