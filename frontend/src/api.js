import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Backend API URL

// Fetch Protein Data
export const fetchProtein = async (name) => {
  try {
    const response = await axios.post(`${API_URL}/protein/fetch`, { name });
    return response.data;
  } catch (error) {
    console.error('Error fetching protein:', error);
    throw error;
  }
};

// Analyze Protein
export const analyzeProtein = async (sequence) => {
  try {
    const response = await axios.post(`${API_URL}/protein/analyze`, {
      sequence,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error analyzing protein:', error);
    throw error;
  }
};

// Convert Protein to RNA
export const convertProteinToRNA = async (
  sequence,
  toStop = false,
  stopSymbol = '*',
  stopCodon,
) => {
  try {
    const response = await axios.post(`${API_URL}/protein/to_rna`, {
      sequence,
      to_stop: toStop,
      stop_symbol: stopSymbol,
      stop_codon: stopCodon,
    });
    return response.data;
  } catch (error) {
    console.error('Error converting to RNA:', error);
    throw error;
  }
};

// Convert Protein to DNA
export const convertProteinToDNA = async (
  sequence,
  toStop = false,
  stopSymbol = '*',
  stopCodon,
) => {
  try {
    const response = await axios.post(`${API_URL}/protein/to_dna`, {
      sequence,
      to_stop: toStop,
      stop_symbol: stopSymbol,
      stop_codon: stopCodon,
    });
    return response.data;
  } catch (error) {
    console.error('Error converting to DNA:', error);
    throw error;
  }
};

// Convert RNA to DNA
export const convertRNAToDNA = async (rnaSequence) => {
  try {
    const response = await axios.post(`${API_URL}/rna/to_dna`, {
      sequence: rnaSequence,
    });
    return response.data;
  } catch (error) {
    console.error('Error converting RNA to DNA:', error);
    throw error;
  }
};

// Convert DNA to RNA
export const convertDNAToRNA = async (dnaSequence) => {
  try {
    const response = await axios.post(`${API_URL}/dna/to_rna`, {
      sequence: dnaSequence,
    });
    return response.data;
  } catch (error) {
    console.error('Error converting DNA to RNA:', error);
    throw error;
  }
};

// Convert RNA to Protein
export const convertRNAToProtein = async (rnaSequence, toStop = false) => {
  try {
    const response = await axios.post(`${API_URL}/rna/to_protein`, {
      sequence: rnaSequence,
      to_stop: toStop,
    });
    return response.data;
  } catch (error) {
    console.error('Error converting RNA to protein:', error);
    throw error;
  }
};

// Convert DNA to Protein
export const convertDNAToProtein = async (dnaSequence, toStop = false) => {
  try {
    const response = await axios.post(`${API_URL}/dna/to_protein`, {
      sequence: dnaSequence,
      to_stop: toStop,
    });
    return response.data;
  } catch (error) {
    console.error('Error converting DNA to protein:', error);
    throw error;
  }
};
