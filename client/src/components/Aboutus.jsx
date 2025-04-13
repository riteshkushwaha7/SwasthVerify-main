import React from 'react';

function Aboutus() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-gray-900 bg-opacity-70 rounded-xl shadow-lg p-6 sm:p-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-violet-400 mb-6 tracking-wide">
          About SwasthVerify
        </h2>

        <div className="space-y-6 text-lg text-gray-300">
  
          <p>
            <strong className="text-violet-300">SwasthVerify</strong> is a simple tool that helps you detect harmful chemicals in ingredient lists by scanning images. The app uses the <strong className="text-violet-400">Tesseract OCR</strong> library to extract text from images, and it then analyzes the ingredients to highlight any dangerous chemicals.
          </p>

          <div>
            <h3 className="text-2xl font-semibold text-violet-400 mt-4">Technologies Used:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium text-white">Tesseract OCR:</span> Accurately extracts text from uploaded images.
              </li>
              <li>
                <span className="font-medium text-white">React.js:</span> Provides a smooth, interactive frontend.
              </li>
              <li>
                <span className="font-medium text-white">Node.js & Express:</span> Powers the backend to process text and interact with the database.
              </li>
              <li>
                <span className="font-medium text-white">MongoDB:</span> Stores data about harmful chemicals for quick lookups.
              </li>
              <li>
                <span className="font-medium text-white">Gemini API:</span> Chat bot to tell users about harmful chemical, alternatives,side effects.
              </li>

              <li>
                <span className="font-medium text-white">Jspdf:</span> To generate pdf report of the chemical detection.
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-2xl font-semibold text-violet-400 mt-6">Chemicals Database:</h3>
            <p>
              The app compares ingredients against a curated list of 684 harmful chemicals. This list is sourced from the official Dish website. You can check the source document for more details.
            </p>
          </div>

         
          <div>
            <h3 className="text-2xl font-semibold text-violet-400 mt-6">Why We Created It:</h3>
            <p>
              As people become more health-conscious, SwasthVerify makes it easy to scan ingredient labels and detect harmful substances with just a photo. It's quick, simple, and health-friendly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;





