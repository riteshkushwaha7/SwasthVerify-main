import { useState } from "react";
import axios from "axios";
import "./chatbot.css"; 

function Chatbot() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [harmfulChemicals, setHarmfulChemicals] = useState([]);
  const [geminiInfo, setGeminiInfo] = useState(""); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      setResponse(""); 
      const res = await axios.post("http://localhost:5000/api/ask", { prompt });
      setResponse(res.data.answer || "No response received.");

      if (res.data.harmfulChemicals && res.data.harmfulChemicals.length > 0) {
        setHarmfulChemicals(res.data.harmfulChemicals);
        setGeminiInfo(res.data.geminiResponse); 
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setResponse("❌ Something went wrong while contacting Gemini.");
    } finally {
      setLoading(false);
      setPrompt(""); 
    }
  };

  return (
    <div className="chatbot-container">
      {}
      <div
        className={`chatbox-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        💬 Ask the Bot
      </div>

      {isOpen && (
        <div className="chatbox">
          <div className="chat-header">
            <h3>🧠 Gemini Assistant</h3>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ✖
            </button>
          </div>

          <div className="chat-body">
            {loading ? (
              <p className="loading">Thinking...</p>
            ) : response ? (
              <div className="chat-message bot">
                {response.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                {harmfulChemicals.length > 0 && (
                  <div>
                    <h4>Harmful Chemicals Detected:</h4>
                    <ul>
                      {harmfulChemicals.map((chem, i) => (
                        <li key={i}>{chem}</li>
                      ))}
                    </ul>
                    <h4>Why they are harmful:</h4>
                    <p>{geminiInfo}</p>
                    <p>Would you like to know safer alternatives?</p>
                  </div>
                )}
              </div>
            ) : (
              <p className="placeholder">Ask something about ingredients...</p>
            )}
          </div>

          <form className="chat-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask about a product..."
              className="input-box"
            />
            <button type="submit" className="send-btn" title="Send">
              📤
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
