from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import os
import json
import zipfile
from weasyprint import HTML

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])  # Allow frontend requests
UPLOAD_FOLDER = "uploads"
RESULT_FOLDER = "results"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(RESULT_FOLDER, exist_ok=True)

@app.route("/getInfo", methods=["POST"])
def receive_json():
   data = request.get_json()
   if not data:
      return jsonify({"error": "No JSON data received"}), 400
   
   template_path = generate_resume(data)
   pdf_path = convert_to_pdf(template_path)
   zip_path = create_zip(template_path, pdf_path)
   
   return jsonify({"message": "Resume generated successfully", "zip_url": f"/download/{os.path.basename(zip_path)}"})


def generate_resume(data):
   template_path = os.path.join(RESULT_FOLDER, "resume_template.txt")
   with open(template_path, "w") as f:
      f.write(json.dumps(data, indent=4))  # Simulating a resume template
   return html_content


def convert_to_pdf(template_path,html_content):
    pdf_path = os.path.join(RESULT_FOLDER, "resume.pdf")
    HTML(string=html_content).write_pdf(pdf_path)
    return pdf_path
   return pdf_path


def create_zip(template_path, pdf_path):
   zip_path = os.path.join(RESULT_FOLDER, "resume_package.zip")
   with zipfile.ZipFile(zip_path, "w") as zipf:
      zipf.write(template_path, os.path.basename(template_path))
      zipf.write(pdf_path, os.path.basename(pdf_path))
   return zip_path


@app.route("/download/<filename>", methods=["GET"])
def download_file(filename):
   file_path = os.path.join(RESULT_FOLDER, filename)
   if os.path.exists(file_path):
      return send_file(file_path, as_attachment=True)
   return jsonify({"error": "File not found"}), 404

if __name__ == "__main__":
   app.run(debug=True)