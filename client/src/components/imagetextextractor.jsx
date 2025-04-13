import React, { useState } from 'react';
import axios from 'axios';

const ImageTextExtractor = ({ setExtractedText, setImage }) => {
  const [imageFile, setImageFile] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImage(URL.createObjectURL(file));
    }
  };

  const handleExtractText = async () => {
    if (!imageFile) return;

    const formData = new FormData();
    formData.append('image', imageFile);

    try {
      const response = await axios.post('https://swasthverify-1.onrender.com/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setExtractedText(response.data.text);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-start w-full animate-fade-in">

<label className="block w-full">
  <span className="block text-sm font-medium text-white mb-2">
    Choose an image
  </span>
  <input
    type="file"
    onChange={handleImageUpload}
    className="w-full text-sm text-gray-100
      file:bg-purple-700 file:text-white
      file:font-medium file:px-5 file:py-2
      file:rounded-md file:border-none
      file:transition file:duration-200
      hover:file:bg-purple-600
      cursor-pointer"
  />
</label>

{imageFile && (
  <button
    onClick={handleExtractText}
    className="inline-block bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md 
               transition duration-300 ease-in-out hover:bg-purple-600 hover:shadow-lg transform hover:scale-105"
  >
    Extract Text
  </button>
)}



    </div>
  );
};

export default ImageTextExtractor;
















