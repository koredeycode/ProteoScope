from flask import Flask
from .db import db
from flask_migrate import Migrate
from .routes.protein_routes import protein_blueprint
from .config import Config
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    CORS(app, origins=["http://localhost:5173"])
    

    app.config.from_object(Config)

    db.init_app(app)
    migrate = Migrate(app, db)

    app.register_blueprint(protein_blueprint)

    return app
