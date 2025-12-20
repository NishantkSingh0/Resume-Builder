#  - ResumeBuilder - A cool project for Building high quality and ATS freindly resumes in free...
#  - Copyright (C) 2025 NishantkSingh0.github.io
#  - Licensed under the GNU GPL v3.0 - see LICENSE file for details. 

from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
from weasyprint import HTML
from llm import llama_4
from utils import parse_pdf, parse_docx
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


@app.route("/parse-resume", methods=["POST"])
def parse_resume():
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files['file']
    filename = file.filename.lower()
    print(f"Get {filename}.. Sending them to parser")
    try:
        if filename.endswith(".pdf"):
            parsed_json = parse_pdf(file)
        elif filename.endswith(".docx"):
            parsed_json = parse_docx(file)
        else:
            print("Wrong file provided")
            return jsonify({"error": "Unsupported file type"}), 400

        print("Structure Successfull.. Returning Json")
        return jsonify(parsed_json), 200

    except Exception as e:
        print("Failed parsing resume:", e)
        print("Structure Failed..")
        return jsonify({
            "error": "Failed to parse resume",
            "details": str(e)
        }), 500
    

@app.route("/EnhanceText", methods=["POST"])
def enhance_text():
    try:
        data = request.get_json(silent=True)

        if not data:
            return jsonify({"error": "No JSON received"}), 400
        if "contactInfo" in data:
            prompt=f"""Write a Short Resume Summary based on This User Info's (Ensure to Include Only important details and keep it proffessional and SHORT)
                User Info: {data}
                RETURN ONLY SHORT Summary no any OTHER TEXT.. (Exact 3-4 line summary) and With Respect to 'I'
            """
        else:
            prompt = f"""Enhance the Key Achievements using the context below.
                Job Title: {data.get('jobTitle')}
                Company Name: {data.get('companyName')}
                Work Duration: {data.get('WorkDuration')}
                Key Achievements: {data.get('keyAchievements') if data.get('keyAchievements') else "None"}

                RETURN ONLY KeyAchievement string without any markdown like formatting and Should be small (2 lines or 30 words)
            """

        print("PROMPT:\n", prompt, flush=True)

        response = llama_4(prompt)
        print("Enhancement Successfull: ", response)
        return jsonify({"result": response}), 200

    except Exception as e:
        import traceback
        print(traceback.format_exc(), flush=True)
        return jsonify({"error": str(e)}), 500
        

if __name__ == '__main__':
    app.run(debug=True)
