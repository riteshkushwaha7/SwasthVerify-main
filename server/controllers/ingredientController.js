const Chemical = require('../models/Chemical');

exports.searchIngredients = async (req, res) => {
  const { ingredients } = req.body;

  if (!ingredients || !Array.isArray(ingredients)) {
    return res.status(400).json({ message: 'Invalid ingredients list' });
  }

  try {
    const data = await Chemical.findOne({});
    if (!data) return res.status(500).json({ message: 'Chemical data not found' });

    const found = ingredients.filter(ingredient =>
      data.harmfulChemicals.some(c => c.toLowerCase() === ingredient.toLowerCase())
    );

    res.json({
      count: found.length,
      harmfulChemicals: found,
      sourceLink: data.sourceLink || 'No source link provided',
    });
  } catch (error) {
    console.error('DB Error:', error);
    res.status(500).json({ message: 'Search failed' });
  }
};
