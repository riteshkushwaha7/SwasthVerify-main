import React, { useState } from 'react';
import axios from 'axios';
import ImageTextExtractor from './imagetextextractor';
import ReportGenerator from './ReportGenerator';

function Home() {
  const [extractedText, setExtractedText] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [image, setImage] = useState(null);
  const [harmfulChemicals, setHarmfulChemicals] = useState(0);

  const handleSubmit = async () => {
    const words = extractedText
      .split(/\s+/)
      .filter((word) => word.trim().length > 0);

    try {
      const response = await axios.post('http://localhost:5000/api/search-ingredients', {
        ingredients: words,
      });

      if (response.data.count > 0) {
        setHarmfulChemicals(response.data.count);
        setResponseMessage(
          `Found harmful chemicals: ${response.data.harmfulChemicals.join(', ')}`
        );
      } else {
        setHarmfulChemicals(0);
        setResponseMessage('No harmful chemicals found.');
      }
    } catch (err) {
      console.error('Server error:', err);
      setResponseMessage('Error checking harmful chemicals.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white px-4 py-10">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl border border-gray-800 p-6 md:p-10 shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-8">
          Harmful Chemical Detector
        </h1>


        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-200 mb-3">Upload Image</h2>
          <ImageTextExtractor
            setExtractedText={setExtractedText}
            setImage={setImage}
          />

          {image && (
            <div className="mt-5 flex justify-center">
              <img
                src={image}
                alt="Uploaded Preview"
                className="w-full max-w-xs rounded-lg border-2 border-purple-500 shadow-md transition-all duration-300 hover:scale-105"
              />
            </div>
          )}
        </section>

   
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-200 mb-3">
            Edit Extracted Text
          </h2>
          <textarea
            rows="8"
            value={extractedText}
            onChange={(e) => setExtractedText(e.target.value)}
            className="w-full bg-gray-800 text-gray-200 p-4 text-base rounded-md border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Extracted ingredients appear here..."
          />
        </section>

        <div className="flex justify-evenly mb-6">
          <button
            onClick={handleSubmit}
            className="bg-purple-700 hover:bg-purple-800 text-white font-medium px-6 py-2 rounded-full shadow-md transition-transform transform hover:scale-105 duration-200"
          >
            Submit for Chemical Check
          </button>
          <ReportGenerator extractedText={extractedText} responseMessage={responseMessage} harmfulChemicals={harmfulChemicals} />
        </div>

      
        {responseMessage && (
          <div
            className={`text-center text-sm md:text-base font-medium px-4 py-3 rounded-md border shadow-sm transition-all ${
              harmfulChemicals > 0
                ? 'bg-red-950 text-red-300 border-red-400'
                : 'bg-green-950 text-green-300 border-green-400'
            }`}
          >
            {responseMessage}
          </div>
        )}

        
        {harmfulChemicals > 0 && (
          <p className="mt-4 text-red-400 text-center font-semibold text-sm tracking-wide">
            Total harmful chemicals found: {harmfulChemicals}
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;





