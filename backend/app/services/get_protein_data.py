import requests
# Fetch protein data from UniProt


def get_protein_data(protein_name):
    url = f"https://www.uniprot.org/uniprot/{protein_name}.fasta"
    response = requests.get(url)

    if response.status_code == 200:
        fasta_data = response.text
        sequence = fasta_data.split('\n')[1:]  # Skip the first line (header)
        # Join the rest to form the sequence
        sequence = ''.join(sequence).strip()
        return {
            'name': protein_name,
            'sequence': sequence
        }
    else:
        return {'error': 'Protein not found or invalid name.'}
