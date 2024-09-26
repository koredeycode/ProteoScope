const API_URL = 'http://localhost:5000'; // Backend API URL

export const fetchProtein = async (name) => {
  const response = await fetch(`${API_URL}/fetch`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });
  const data = await response.json();
  return data;
};

export const analyzeProtein = async (sequence) => {
  const response = await fetch(`${API_URL}/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sequence }),
  });
  const data = await response.json();
  return data;
};

export const convertToRNA = async (sequence) => {
  const response = await fetch(`${API_URL}/to_rna`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sequence }),
  });
  const data = await response.json();
  return data;
};

export const convertToDNA = async (sequence) => {
  const response = await fetch(`${API_URL}/to_dna`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sequence }),
  });
  const data = await response.json();
  return data;
};
