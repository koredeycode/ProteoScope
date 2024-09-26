import React, { useState } from 'react';
import { analyzeProtein } from '../api';

const AnalyzeProtein = () => {
  const [sequence, setSequence] = useState('');
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    const response = await analyzeProtein(sequence);
    setResult(response);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Analyze Protein</h2>
      <textarea
        className="border w-full p-2 mb-4"
        placeholder="Enter protein sequence..."
        value={sequence}
        onChange={(e) => setSequence(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleAnalyze}
      >
        Analyze
      </button>
      {result && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Analysis Result:</h3>
          <p>Molecular Weight: {result.molecular_weight}</p>
          <p>Isoelectric Point: {result.isoelectric_point}</p>
          <p>Aromaticity: {result.aromaticity}</p>
          <p>Gravy: {result.gravy}</p>
        </div>
      )}
    </div>
  );
};

export default AnalyzeProtein;
