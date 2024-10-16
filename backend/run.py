from app import create_app
from flask_cors import CORS
from flask import jsonify

app = create_app()
# CORS(app)
# CORS(app, origins=["http://localhost:5173"])

@app.errorhandler(404)
def page_not_found(e):
    return jsonify(error="Route not found"), 404

if __name__ == '__main__':
    app.run(debug=True)
