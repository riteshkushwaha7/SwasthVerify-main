const Chemical = require('../models/Chemical');
const { getGeminiResponse, setHarmfulChemicalsContext } = require('./gemini'); 

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

    if (found.length > 0) {
      setHarmfulChemicalsContext(found);

      const harmfulMessage = `I detected the following harmful chemicals: ${found.join(', ')}. Tell me more about why these are harmful.`;
      const geminiResponse = await getGeminiResponse(harmfulMessage);

      res.json({
        count: found.length,
        harmfulChemicals: found,
        sourceLink: data.sourceLink || 'No source link provided',
        geminiResponse: geminiResponse || "No additional information available from Gemini."
      });
    } else {
      res.json({
        count: 0,
        harmfulChemicals: [],
        message: "No harmful chemicals detected."
      });
    }
  } catch (error) {
    console.error('DB Error:', error);
    res.status(500).json({ message: 'Search failed' });
  }
};
