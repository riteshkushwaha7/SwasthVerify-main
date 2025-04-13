const express = require("express");
const { getGeminiResponse } = require("../controllers/gemini"); 

const router = express.Router();

router.post("/", async (req, res) => {
  const { prompt, harmfulIngredients } = req.body;

  if (!prompt) {
    return res.status(400).json({ message: "Prompt is required" });
  }

  try {
    const answer = await getGeminiResponse(prompt, harmfulIngredients);

    res.json({ answer });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router; 
