from Bio.SeqUtils.ProtParam import ProteinAnalysis


def analyze_protein(sequence):
    analysis = ProteinAnalysis(sequence)
    properties = {
        'molecular_weight': analysis.molecular_weight(),
        'aromaticity': analysis.aromaticity(),
        'isoelectric_point': analysis.isoelectric_point(),
        'gravy': analysis.gravy(),
        'amino_acids_percent()': {aa: percent * 100 for aa, percent in analysis.amino_acids_percent().items()}
    }
    return properties
