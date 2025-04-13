// src/components/ReportGenerator.jsx
import React from 'react';
import { jsPDF } from 'jspdf';

const ReportGenerator = ({ extractedText, responseMessage, harmfulChemicals }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    const title = "SwasthVerify - Ingredient Report";
    const titleX = (pageWidth - doc.getTextWidth(title)) / 2;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(title, titleX, 20);

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("Extracted Ingredients:", 5, 40);
    doc.setFont("times", "normal");
    doc.text(doc.splitTextToSize(extractedText || "N/A", 180), 15, 45);

    doc.setFont("times", "bold");
    doc.text("Result:", 120, 40);
    doc.setFont("times", "normal");
    doc.text(responseMessage || "N/A", 120, 45);

    doc.setFont("times", "bold");
    doc.text(`Harmful Chemical Count: ${harmfulChemicals}`, 120, 50);

    doc.save("Swasthverify-report.pdf");
  };

  return (
    <button
      onClick={generatePDF}
      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300"
    >
      Download Report
    </button>
  );
};

export default ReportGenerator;

