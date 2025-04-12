const Tesseract = require('tesseract.js');
const fs = require('fs');

exports.extractText = async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

  const filePath = req.file.path;
  try {
    const { data: { text } } = await Tesseract.recognize(filePath, 'eng', {
      logger: (m) => console.log(m),
    });
    res.json({ text });
  } catch (error) {
    console.error('OCR Error:', error);
    res.status(500).json({ message: 'Error processing image' });
  } finally {
    fs.unlink(filePath, (err) => {
      if (err) console.error('File deletion error:', err);
    });
  }
};
