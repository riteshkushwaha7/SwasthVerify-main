const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

dotenv.config();

const connectDB = require('./config/db');

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Ensure upload directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Routes
app.use('/api/upload', require('./routes/ocrRoutes'));
app.use('/api/search-ingredients', require('./routes/ingredientRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});