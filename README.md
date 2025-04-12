<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SwasthVerify - Harmful Chemical Detection</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
      background-color: #f4f4f4;
      color: #333;
    }
    h1, h2, h3 {
      font-family: 'Arial', sans-serif;
    }
    h1 {
      font-size: 2.5rem;
      color: #4CAF50;
      text-align: center;
      text-decoration: underline;
    }
    h2 {
      font-size: 2rem;
      color: #333;
      text-decoration: underline;
    }
    h3 {
      font-size: 1.5rem;
      color: #555;
    }
    ul {
      list-style-type: square;
      margin-left: 20px;
    }
    li {
      margin-bottom: 10px;
    }
    p {
      font-size: 1rem;
      margin: 10px 0;
    }
    code {
      font-family: monospace;
      background-color: #f5f5f5;
      padding: 0.2rem;
      border-radius: 5px;
    }
    .tech-stack {
      font-size: 1.2rem;
      color: #333;
      background-color: #e9f7e9;
      padding: 10px;
      border-radius: 5px;
    }
  </style>
</head>
<body>

  <h1>SwasthVerify</h1>
  <p><strong>Swasth Verify</strong> is a full-stack web application that helps users identify harmful chemicals in products by analyzing the list of ingredients from an image.</p>

  <h2>1) Description</h2>
  <p>Many products—especially cosmetics and packaged food—contain ingredients that are hard to understand. <strong>Swasth Verify</strong> makes it easy for users to check whether a product contains any harmful chemicals.</p>

  <h2>2) How it works:</h2>
  <ul>
    <li>The user uploads an image of the product's ingredients.</li>
    <li>The app extracts text from the image using OCR (Optical Character Recognition).</li>
    <li>It compares the extracted text with a list of harmful chemicals stored in MongoDB.</li>
    <li>If any harmful chemical is found, the app displays:
      <ul>
        <li>The name(s) of the harmful chemicals</li>
        <li>The number of harmful chemicals detected</li>
      </ul>
    </li>
  </ul>

  <h2>3) Features</h2>
  <ul>
    <li>Image upload functionality</li>
    <li>OCR-based text extraction</li>
    <li>Comparison with a chemical database</li>
    <li>Real-time harmful chemical detection</li>
    <li>Clean and user-friendly interface</li>
  </ul>

  <h2>4) Tech Stack</h2>
  <div class="tech-stack">
    <h3>Frontend:</h3>
    <ul>
      <li>React.js</li>
      <li>Axios</li>
      <li>Tailwind CSS</li>
    </ul>
    
    <h3>Backend:</h3>
    <ul>
      <li>Node.js</li>
      <li>Express.js</li>
    </ul>
    
    <h3>Database:</h3>
    <ul>
      <li>MongoDB</li>
    </ul>
  </div>

  <h2>5) Other Tools:</h2>
  <ul>
    <li>Tesseract.js (for OCR)</li>
    <li>Git & GitHub for version control</li>
  </ul>

  <h2>6) How to run the project</h2>
  <p><strong>Start the Backend</strong><br>
    <code>cd server</code><br>
    <code>npm install</code><br>
    <code>node server.js</code>
  </p>
  
  <p><strong>Start the Frontend</strong><br>
    <code>cd client</code><br>
    <code>npm install</code><br>
    <code>npm run dev</code>
  </p>

  <h2>7) Future Improvements</h2>
  <ul>
    <li>Add barcode scanning for quicker input</li>
    <li>Display safety ratings for each chemical</li>
    <li>User login and ingredient scan history</li>
    <li>Multi-language support</li>
  </ul>

  <h2>8) Contact</h2>
  <p>For suggestions or contributions, feel free to contact us:</p>
  <p><strong>Email:</strong><br>
    riteshkushwaha497@gmail.com<br>
    anshsahu7705@gmail.com
  </p>

</body>
</html>





