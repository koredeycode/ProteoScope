import React, { useState } from 'react';
import { fetchProtein } from '../api';

const FetchProtein = () => {
  const [proteinName, setProteinName] = useState('');
  const [result, setResult] = useState(null);

  const handleFetch = async () => {
    const response = await fetchProtein(proteinName);
    setResult(response);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Fetch Protein</h2>
      <textarea
        className="border w-full p-2 mb-4"
        placeholder="Enter protein name..."
        value={proteinName}
        onChange={(e) => setProteinName(e.target.value.toLocaleUpperCase())}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleFetch}
      >
        Fetch
      </button>
      {result && <div className="mt-4">{result.sequence}</div>}
    </div>
  );
};

export default FetchProtein;
