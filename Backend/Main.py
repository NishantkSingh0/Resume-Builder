from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app, resources={r"/upload": {"origins": "http://localhost:5173"}})  # Allow only your frontend

@app.route('/upload', methods=['POST'])
def receive_json():
    try:
        data = request.get_json()  # Ensure JSON data is parsed correctly
        if not data:
            return jsonify({"error": "No JSON received"}), 400
        
        print("Received Data:", data)  # Debugging log
        return jsonify({"message": "Data received successfully", "data": data})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)