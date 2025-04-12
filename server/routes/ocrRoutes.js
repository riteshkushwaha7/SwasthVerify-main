const express = require('express');
const router = express.Router();
const { extractText } = require('../controllers/ocrController');
const upload = require('../middlewares/uploadMiddleware');

router.post('/', upload.single('image'), extractText);

module.exports = router;
