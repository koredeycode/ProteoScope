from flask import Blueprint, request, jsonify
from ..models.protein import Protein
from ..db import db
from ..services.protein_analyzer import analyze_protein
from ..services.protein_converter import protein_to_dna, protein_to_rna
from ..services.fetch_protein_data import fetch_protein_data as fpd
from app.models import protein

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
    data = request.get_json()
    sequence = data['sequence']
    analysis_result = analyze_protein(sequence)
    return jsonify(analysis_result)


@protein_blueprint.route('/protein/to_rna', methods=['POST'])
def convert_protein_to_rna():
    data = request.get_json()
    sequence = data['sequence']
    stop = data.get('stop', False)
    rna_sequence = protein_to_rna(sequence, stop)
    return jsonify({'rna_sequence': rna_sequence})


@protein_blueprint.route('/protein/to_dna', methods=['POST'])
def convert_protein_to_dna():
    data = request.get_json()
    sequence = data['sequence']
    stop = data.get('stop', False)
    dna_sequence = protein_to_dna(sequence, stop)
    return jsonify({'dna_sequence': dna_sequence})


@protein_blueprint.route('/protein/fetch', methods=['POST'])
def fetch_protein_data():
    data = request.get_json()
    protein_name = data['name']
    protein_data = fpd(protein_name)
    return jsonify(protein_data)
