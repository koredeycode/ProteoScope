import React, { useState } from 'react';
import {
  convertProteinToDNA,
  convertProteinToRNA,
  convertRNAToProtein,
  convertDNAToProtein,
  convertRNAToDNA,
  convertDNAToRNA,
} from '../api'; // import your API functions

const SequenceConverter = () => {
  const [inputSequence, setInputSequence] = useState('');
  const [outputSequence, setOutputSequence] = useState('');
  const [inputType, setInputType] = useState('dna');
  const [outputType, setOutputType] = useState('rna');
  const [stopCodon, setStopCodon] = useState('UAA'); // Default stop codon for RNA
  const [stopSymbol, setStopSymbol] = useState('*'); // Default stop symbol for protein
  const [stopCodonEnabled, setStopCodonEnabled] = useState(false); // To toggle the stop codon dropdown

  // Function to handle conversion
  const handleConvert = async () => {
    try {
      let result;
      if (inputType === outputType) {
        result = { sequence: inputSequence }; // No conversion needed
      } else if (inputType === 'dna' && outputType === 'rna') {
        result = await convertDNAToRNA(inputSequence);
      } else if (inputType === 'rna' && outputType === 'dna') {
        result = await convertRNAToDNA(inputSequence);
      } else if (inputType === 'dna' && outputType === 'protein') {
        result = await convertDNAToProtein(inputSequence, stopCodonEnabled);
      } else if (inputType === 'rna' && outputType === 'protein') {
        result = await convertRNAToProtein(inputSequence, stopCodonEnabled);
      } else if (inputType === 'protein' && outputType === 'rna') {
        result = await convertProteinToRNA(
          inputSequence,
          stopCodonEnabled,
          stopSymbol,
          stopCodon,
        );
      } else if (inputType === 'protein' && outputType === 'dna') {
        result = await convertProteinToDNA(
          inputSequence,
          stopCodonEnabled,
          stopSymbol,
          stopCodon.replace('U', 'T'),
        ); // DNA uses T instead of U
      } else {
        result = 'Conversion not supported';
      }

      setOutputSequence(result.sequence);
    } catch (error) {
      console.error('Error converting sequence:', error);
    }
  };

  // Swap the input/output and their types
  const handleSwap = () => {
    setInputSequence(outputSequence);
    setOutputSequence('');
    const tempType = inputType;
    setInputType(outputType);
    setOutputType(tempType);
  };

  // Handle changes to the stop codon dropdown based on the output type
  const handleStopCodonChange = (e) => {
    setStopCodon(e.target.value);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex gap-4 flex-col lg:flex-row justify-around">
        {/* Input Sequence */}
        <div className="flex flex-col">
          <label htmlFor="input-sequence" className="font-bold mb-2">
            Input Sequence
          </label>
          <textarea
            id="input-sequence"
            value={inputSequence}
            onChange={(e) =>
              setInputSequence(e.target.value.toLocaleUpperCase())
            }
            className="border rounded-md p-2"
            rows="6"
            placeholder="Enter your sequence here..."
          />
          <div className="mt-2">
            <select
              value={inputType}
              onChange={(e) => setInputType(e.target.value)}
              className="border p-2 rounded-md"
            >
              <option value="dna">DNA</option>
              <option value="rna">RNA</option>
              <option value="protein">Protein</option>
            </select>
          </div>
        </div>

        {/* Two-Way Arrow Button */}
        <div className="flex flex-col items-center justify-center">
          <button
            className="bg-blue-500 text-white p-2 rounded-full transform transition-transform hover:scale-105 mb-4"
            onClick={handleSwap}
          >
            ↔️
          </button>
        </div>

        {/* Output Sequence */}
        <div className="flex flex-col">
          <label htmlFor="output-sequence" className="font-bold mb-2">
            Output Sequence
          </label>
          <textarea
            id="output-sequence"
            value={outputSequence}
            readOnly
            className="border rounded-md p-2 bg-gray-100"
            rows="6"
            placeholder="Output sequence will appear here..."
          />
          <div className="mt-2">
            <select
              value={outputType}
              onChange={(e) => setOutputType(e.target.value)}
              className="border p-2 rounded-md"
            >
              <option value="dna">DNA</option>
              <option value="rna">RNA</option>
              <option value="protein">Protein</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        {/* Stop Codon Dropdown (visible when converting from protein to RNA/DNA) */}
        {inputType === 'protein' &&
          (outputType === 'rna' || outputType === 'dna') && (
            <div className="my-4">
              <div className="flex flex-col">
                <label htmlFor="stop-symbol" className="font-bold mb-2">
                  Stop Symbol
                </label>

                <input
                  type="text"
                  value={stopSymbol}
                  onChange={(e) => setStopSymbol(e.target.value.slice(-1))}
                  className="border p-2 rounded-md"
                  // maxLength={1}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="stop-codon" className="font-bold mb-2">
                  Select Stop Codon
                </label>
                <select
                  id="stop-codon"
                  value={stopCodon}
                  onChange={handleStopCodonChange}
                  className="border p-2 rounded-md"
                >
                  {outputType === 'rna' ? (
                    <>
                      <option value="UAA">UAA</option>
                      <option value="UAG">UAG</option>
                      <option value="UGA">UGA</option>
                    </>
                  ) : (
                    <>
                      <option value="TAA">TAA</option>
                      <option value="TAG">TAG</option>
                      <option value="TGA">TGA</option>
                    </>
                  )}
                </select>
              </div>
            </div>
          )}

        {/* Stop Codon Checkbox */}
        {(inputType === 'protein' || outputType === 'protein') && (
          <div className="my-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={stopCodonEnabled}
                onChange={(e) => setStopCodonEnabled(e.target.checked)}
                className="form-checkbox h-4 w-4"
              />
              <span className="ml-2">Stop at Stop Codon</span>
            </label>
          </div>
        )}
      </div>

      {/* Convert Button */}
      <button
        className="bg-green-500 text-white p-2 rounded-md mt-4 w-full"
        onClick={handleConvert}
      >
        Convert
      </button>
    </div>
  );
};

export default SequenceConverter;
