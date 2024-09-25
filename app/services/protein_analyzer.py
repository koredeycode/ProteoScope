from Bio.SeqUtils.ProtParam import ProteinAnalysis


def analyze_protein(sequence):
    analysis = ProteinAnalysis(sequence)
    properties = {
        'molecular_weight': analysis.molecular_weight(),
        'aromaticity': analysis.aromaticity(),
        'isoelectric_point': analysis.isoelectric_point(),
        'gravy': analysis.gravy()
    }
    return properties
