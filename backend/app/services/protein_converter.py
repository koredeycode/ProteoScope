from Bio.Seq import Seq
from Bio.SeqRecord import SeqRecord
from Bio.Data import CodonTable

# Function to convert protein to possible RNA sequences (reverse translation)
def protein_to_rna(protein_sequence, to_stop=False, protein_stop_codon="*", rna_stop_codon="UAA"):
    try:
        protein_seq = Seq(protein_sequence)
        
        # Get the standard genetic code table
        codon_table = CodonTable.unambiguous_dna_by_id[1]
        
        # Map each amino acid in the protein sequence to one possible codon (RNA)
        rna_seq = ""
        for aa in protein_seq:
            if aa == protein_stop_codon:  # Stop codon
                rna_seq += rna_stop_codon  # Use UAA as default stop codon
            else:
                # Find the first codon that codes for this amino acid
                for codon, amino_acid in codon_table.forward_table.items():
                    if amino_acid == aa:
                        # Transcribe the codon (replace T with U to make it RNA)
                        rna_seq += codon.replace("T", "U")
                        break
                        
        return rna_seq
    except Exception as e:
        return str(e)
    
# Function to convert RNA sequence to DNA (replace U with T)
def rna_to_dna(rna_sequence):
    try:
        rna_seq = Seq(rna_sequence)
        dna_seq = rna_seq.back_transcribe()  # Replace U with T
        return str(dna_seq)
    except Exception as e:
        return str(e)

# Function to convert DNA sequence to RNA (replace T with U)
def dna_to_rna(dna_sequence):
    try:
        dna_seq = Seq(dna_sequence)
        rna_seq = dna_seq.transcribe()  # Replace T with U
        return str(rna_seq)
    except Exception as e:
        return str(e)

# Function to reverse translate a protein to DNA
def protein_to_dna(protein_sequence, to_stop, protein_stop_codon, rna_stop_codon):
    try:
        # Step 1: Reverse translate protein to RNA
        rna_seq = protein_to_rna(protein_sequence, to_stop, protein_stop_codon, rna_stop_codon)
        
        # Step 2: Convert RNA to DNA
        dna_seq = rna_to_dna(rna_seq)
        
        return dna_seq
    except Exception as e:
        return str(e)


# Function to convert RNA sequence to protein
def rna_to_protein(rna_sequence, to_stop=False):
    try:
        rna_seq = Seq(rna_sequence)
        protein_seq = rna_seq.translate(to_stop=to_stop)
        return str(protein_seq)
    except Exception as e:
        return str(e)

# Function to convert DNA sequence to protein
def dna_to_protein(dna_sequence, to_stop=False):
    try:
        dna_seq = Seq(dna_sequence)
        rna_seq = dna_seq.transcribe()  # Transcribe DNA to RNA
        protein_seq = rna_seq.translate(to_stop=to_stop)
        return str(protein_seq)
    except Exception as e:
        return str(e)