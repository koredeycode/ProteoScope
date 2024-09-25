from Bio.Seq import Seq
from Bio.SeqRecord import SeqRecord

# Function to convert protein to possible RNA sequences (reverse translation)


def protein_to_rna(protein_sequence):
    try:
        protein_seq = Seq(protein_sequence)
        rna_seq = protein_seq.translate(to_stop=True).back_transcribe()
        return str(rna_seq)
    except Exception as e:
        return str(e)

# Function to convert protein to possible DNA sequences


def protein_to_dna(protein_sequence):
    try:
        protein_seq = Seq(protein_sequence)
        dna_seq = protein_seq.translate(to_stop=True).reverse_complement()
        return str(dna_seq)
    except Exception as e:
        return str(e)
