from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId

app = Flask(__name__)
CORS(app)

client = MongoClient('mongodb://localhost:27017/')
db = client['livestream_app']
overlays_collection = db['overlays']

# Route to play RTSP stream
@app.route('/stream', methods=['POST'])
def play_stream():
    data = request.json
    rtsp_url = data.get('rtsp_url')
    return jsonify({"message": "Stream started", "url": rtsp_url})

# CRUD API for overlays
@app.route('/api/overlays', methods=['POST'])
def create_overlay():
    overlay = request.json
    overlays_collection.insert_one(overlay)
    return jsonify({"message": "Overlay created", "overlay": overlay}), 201

@app.route('/api/overlays', methods=['GET'])
def get_overlays():
    overlays = list(overlays_collection.find())
    for overlay in overlays:
        overlay['_id'] = str(overlay['_id'])
    return jsonify(overlays), 200

@app.route('/api/overlays/<overlay_id>', methods=['PUT'])
def update_overlay(overlay_id):
    updated_data = request.json
    overlays_collection.update_one({'_id': ObjectId(overlay_id)}, {'$set': updated_data})
    return jsonify({"message": "Overlay updated"}), 200

@app.route('/api/overlays/<overlay_id>', methods=['DELETE'])
def delete_overlay(overlay_id):
    overlays_collection.delete_one({'_id': ObjectId(overlay_id)})
    return jsonify({"message": "Overlay deleted"}), 200

if __name__ == '__main__':
    app.run(debug=True)
