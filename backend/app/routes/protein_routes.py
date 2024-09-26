from flask import Blueprint, request, jsonify
from ..models.protein import Protein
from ..db import db
from ..services.protein_analyzer import analyze_protein
from ..services.protein_converter import protein_to_dna, protein_to_rna
from ..services.get_protein_data import get_protein_data
from app.models.protein import Protein

protein_blueprint = Blueprint('protein', __name__)


@protein_blueprint.route('/protein', methods=['POST'])
def add_protein():
    data = request.get_json()
    new_protein = Protein(name=data['name'], sequence=data['sequence'])
    db.session.add(new_protein)
    db.session.commit()
    return jsonify({'message': 'Protein added successfully'}), 201


@protein_blueprint.route('/protein/analyze', methods=['POST'])
def analyze_protein_route():
    print(request)
    data = request.get_json()
    sequence = data['sequence']
    analysis_result = analyze_protein(sequence)
    return jsonify(analysis_result), 200


@protein_blueprint.route('/protein/fetch', methods=['POST'])
def fetch_protein_data():
    data = request.get_json()
    protein_name = data['name']
    protein_data = get_protein_data(protein_name)
    return jsonify(protein_data),200
