Swasth Verify
Swasth Verify is a full-stack web application that helps users identify harmful chemicals in products by analyzing the list of ingredients from an image

1)Description
Many products—especially cosmetics and packaged food—contain ingredients that are hard to understand. Swasth Verify makes it easy for users to check whether a product contains any harmful chemicals.

2)How it works:

The user uploads an image of the product's ingredients.

The app extracts text from the image using OCR (Optical Character Recognition).

It compares the extracted text with a list of harmful chemicals stored in MongoDB.

If any harmful chemical is found, the app displays:

 The name(s) of the harmful chemicals

 The number of harmful chemicals detected

3)Features
Image upload functionality

OCR-based text extraction

Comparison with a chemical database

Real-time harmful chemical detection

Clean and user-friendly interface

4)Tech Stack
Frontend:

React.js

Axios

Tailwind CSS

Backend:

Node.js

Express.js

Database:

MongoDB

5) Other Tools:

Tesseract.js (for OCR)

Git & GitHub for version control

6) How to run the project
  Start the Backend
   cd server
   npm install
   node server.js

 Start the Frontend
  cd client
  npm install
  npm run dev

7) Future Improvements
   Add barcode scanning for quicker input
   Display safety ratings for each chemical
   User login and ingredient scan history
   Multi-language support

8)  Contact
   For suggestions or contributions, feel free to contact us:
   Email: riteshkushwaha497@gmail.com anshsahu7705@gmail.com




