const express = require('express');
const router = express.Router();
const { searchIngredients } = require('../controllers/ingredientController');

router.post('/', searchIngredients);

module.exports = router;
