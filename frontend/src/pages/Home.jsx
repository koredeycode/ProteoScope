import React from 'react';

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to ProteoScope</h1>
      <p className="text-gray-700">
        Interact with protein data and perform analysis using the tools
        available.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <a
          href="/analyze"
          className="p-4 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
        >
          Analyze Protein
        </a>
        <a
          href="/fetch"
          className="p-4 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
        >
          Fetch Protein
        </a>
        <a
          href="/sequence_converter"
          className="p-4 bg-green-500 text-white rounded shadow hover:bg-green-600 transition"
        >
          Sequence Converter
        </a>
      </div>
    </div>
  );
};

export default Home;
