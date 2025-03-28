from flask import Flask, request, jsonify, send_file
from flask_cors import CORS  
from ProcessTemplates import GenerateResume
import zipfile
import os

app = Flask(__name__)
CORS(app, resources={r"/upload": {"origins": "http://localhost:5173"}})  

@app.route('/upload', methods=['POST'])
def receive_json():
    try:
        data = request.get_json()  
        if not data:
            return jsonify({"error": "No JSON received"}), 400
        
        print("Data Received")  

        Address = GenerateResume(data)

        zip_filename = Address + '.zip'
        
        # Create a ZIP file
        with zipfile.ZipFile(zip_filename, 'w') as zipf:
            zipf.write(Address + ".txt")
            zipf.write(Address + ".pdf")
        
        print("sent successfully")
        return send_file(zip_filename, as_attachment=True)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)