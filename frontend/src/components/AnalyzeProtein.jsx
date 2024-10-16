import React, { useState } from 'react';
import { analyzeProtein } from '../api';
import PieChart from './PieChart';

const AnalyzeProtein = () => {
  const [sequence, setSequence] = useState('');
  const [result, setResult] = useState(null);
  const [aminoAcidData, setAminoAcidData] = useState(null);

  const handleAnalyze = async () => {
    const response = await analyzeProtein(sequence);
    setResult(response);
    setAminoAcidData(response.amino_acids_percent);
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Analyze Protein</h2>
      <textarea
        className="border w-full p-2 mb-4"
        placeholder="Enter protein sequence..."
        value={sequence}
        onChange={(e) => setSequence(e.target.value.toLocaleUpperCase())}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleAnalyze}
        type="submit"
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
      <div>
        <h1>Protein Amino Acid composition</h1>

        {aminoAcidData ? (
          <PieChart aminoAcidData={aminoAcidData} />
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
};

export default AnalyzeProtein;
