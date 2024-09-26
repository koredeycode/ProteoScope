import React, { useState } from 'react';
import { convertToRNA } from '../api';

const ProteinToRNA = () => {
  const [sequence, setSequence] = useState('');
  const [result, setResult] = useState(null);

  const handleConvert = async () => {
    const response = await convertToRNA(sequence);
    setResult(response);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Convert Protein to RNA</h2>
      <textarea
        className="border w-full p-2 mb-4"
        placeholder="Enter protein sequence..."
        value={sequence}
        onChange={(e) => setSequence(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleConvert}
      >
        Convert
      </button>
      {result && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">RNA Sequence:</h3>
          <p>{result.sequence}</p>
        </div>
      )}
    </div>
  );
};

export default ProteinToRNA;
