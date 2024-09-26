from flask import Blueprint, request, jsonify
from ..services.protein_converter import (
    protein_to_rna, rna_to_dna, dna_to_rna, protein_to_dna,
    rna_to_protein, dna_to_protein
)

protein_conversion_blueprint = Blueprint('protein_conversion', __name__)

# Route to convert protein to RNA
@protein_conversion_blueprint.route('/protein/to_rna', methods=['POST'])
def convert_protein_to_rna():
    data = request.get_json()
    protein_sequence = data['sequence']
    to_stop = data.get('to_stop', False)
    protein_stop_codon = data.get('stop_symbol', '*')
    rna_stop_codon = data.get('stop_codon', 'UAA')
    rna_sequence = protein_to_rna(protein_sequence, to_stop, protein_stop_codon, rna_stop_codon)
    return jsonify({'sequence': rna_sequence}), 200

# Route to convert RNA to DNA
@protein_conversion_blueprint.route('/rna/to_dna', methods=['POST'])
def convert_rna_to_dna():
    data = request.get_json()
    rna_sequence = data['sequence']
    dna_sequence = rna_to_dna(rna_sequence)
    return jsonify({'sequence': dna_sequence}), 200

# Route to convert DNA to RNA
@protein_conversion_blueprint.route('/dna/to_rna', methods=['POST'])
def convert_dna_to_rna():
    data = request.get_json()
    dna_sequence = data['sequence']
    rna_sequence = dna_to_rna(dna_sequence)
    return jsonify({'sequence': rna_sequence}), 200

# Route to convert protein to DNA
@protein_conversion_blueprint.route('/protein/to_dna', methods=['POST'])
def convert_protein_to_dna():
    data = request.get_json()
    protein_sequence = data['sequence']
    to_stop = data.get('to_stop', False)
    protein_stop_codon = data.get('stop_symbol', '*')
    dna_stop_codon = data.get('stop_codon', 'TAA')
    dna_sequence = protein_to_dna(protein_sequence, to_stop, protein_stop_codon, dna_stop_codon)
    return jsonify({'sequence': dna_sequence}), 200

# Route to convert RNA to protein
@protein_conversion_blueprint.route('/rna/to_protein', methods=['POST'])
def convert_rna_to_protein():
    data = request.get_json()
    rna_sequence = data['sequence']
    to_stop = data.get('to_stop', False)
    protein_sequence = rna_to_protein(rna_sequence, to_stop)
    return jsonify({'sequence': protein_sequence}), 200

# Route to convert DNA to protein
@protein_conversion_blueprint.route('/dna/to_protein', methods=['POST'])
def convert_dna_to_protein():
    data = request.get_json()
    dna_sequence = data['sequence']
    to_stop = data.get('to_stop', False)
    protein_sequence = dna_to_protein(dna_sequence, to_stop)
    return jsonify({'sequence': protein_sequence}), 200
