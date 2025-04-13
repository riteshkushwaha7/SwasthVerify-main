const { GoogleGenAI } = require("@google/genai");
const dotenv = require("dotenv");
dotenv.config();

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API });

let harmfulContext = [];

function setHarmfulChemicalsContext(chemicals = []) {
  harmfulContext = chemicals;
}

async function getGeminiResponse(prompt) {
  console.log("Request received for:", prompt);

  try {
    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      throw new Error("The prompt cannot be empty.");
    }

    const instruction = `
You are Swasth Verify — a food safety expert AI. Your ONLY job is to:
- Analyze food product ingredients.
- Identify harmful or risky substances (like additives, allergens, chemicals).
- If harmful chemicals are found, explain why they are harmful and why the user should avoid them.
- Suggest 2–3 safer or natural alternatives for each harmful ingredient found.
- If no harmful chemicals are found, suggest a safer or healthier product alternative.
If the question is NOT about food, ingredients, or safety — respond with:
"I'm here to help you verify food ingredients. Please ask me something related to product safety."
`;

    const harmfulExplanation = harmfulContext.length > 0 ? `
The following harmful chemicals were detected earlier: ${harmfulContext.join(', ')}.
If this context is relevant, please explain why they are harmful and suggest safer alternatives.
Otherwise, use the user's latest message as your focus.
` : '';

    const finalPrompt = `${instruction}\n\nUser: ${prompt}\n${harmfulExplanation}`;

    const response = await genAI.models.generateContent({
      model: "gemini-1.5-flash",
      contents: finalPrompt,
    });

    console.log("Response from Gemini:", response);

    return response.text;
  } catch (err) {
    console.error("Error during Gemini API call:", err);
    throw new Error("Failed to get response from Gemini");
  }
}

module.exports = {
  getGeminiResponse,
  setHarmfulChemicalsContext, 
};
