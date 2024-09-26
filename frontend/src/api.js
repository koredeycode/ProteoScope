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
export const convertToRNA = async (sequence) => {
  try {
    const response = await axios.post(`${API_URL}/protein/to_rna`, {
      sequence,
    });
    return response.data;
  } catch (error) {
    console.error('Error converting to RNA:', error);
    throw error;
  }
};

// Convert Protein to DNA
export const convertToDNA = async (sequence) => {
  try {
    const response = await axios.post(`${API_URL}/protein/to_dna`, {
      sequence,
    });
    return response.data;
  } catch (error) {
    console.error('Error converting to DNA:', error);
    throw error;
  }
};
