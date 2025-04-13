import { useState } from "react";
import axios from "axios";

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
      if (res.data.harmfulChemicals?.length > 0) {
        setHarmfulChemicals(res.data.harmfulChemicals);
        setGeminiInfo(res.data.geminiResponse);
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setResponse("Oops! Something went wrong.");
    } finally {
      setLoading(false);
      setPrompt("");
    }
  };

  return (
    <>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-purple-600 text-white rounded-full px-4 py-2 shadow-lg hover:bg-purple-700 transition-all"
      >
        Ask ChatBot
      </button>

     
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 max-w-sm bg-gray-900 text-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-700">
          <div className="flex items-center justify-between p-4 bg-purple-700 text-white font-semibold">
            <span>Need Help?</span>
            <button onClick={() => setIsOpen(false)} className="text-sm">✖</button>
          </div>

          <div className="p-4 h-64 overflow-y-auto space-y-2 text-sm">
            {loading ? (
              <p className="text-purple-300">Thinking...</p>
            ) : response ? (
              <div>
                <p className="mb-2">{response}</p>
                {harmfulChemicals.length > 0 && (
                  <div>
                    <p className="font-medium text-red-400">⚠ Harmful Chemicals Found:</p>
                    <ul className="list-disc list-inside text-red-300">
                      {harmfulChemicals.map((chem, i) => (
                        <li key={i}>{chem}</li>
                      ))}
                    </ul>
                    <p className="mt-2 text-gray-300">{geminiInfo}</p>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-gray-400">Ask about ingredients or products...</p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex border-t border-gray-700">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 p-2 bg-gray-800 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-purple-600 px-4 text-white hover:bg-purple-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Chatbot;











// import { useState } from "react";
// import axios from "axios";
// import "./chatbot.css"; 

// function Chatbot() {
//   const [prompt, setPrompt] = useState("");
//   const [response, setResponse] = useState("");
//   const [isOpen, setIsOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [harmfulChemicals, setHarmfulChemicals] = useState([]);
//   const [geminiInfo, setGeminiInfo] = useState(""); 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!prompt.trim()) return;

//     try {
//       setLoading(true);
//       setResponse(""); 
//       const res = await axios.post("http://localhost:5000/api/ask", { prompt });
//       setResponse(res.data.answer || "No response received.");

//       if (res.data.harmfulChemicals && res.data.harmfulChemicals.length > 0) {
//         setHarmfulChemicals(res.data.harmfulChemicals);
//         setGeminiInfo(res.data.geminiResponse); 
//       }
//     } catch (err) {
//       console.error("Error fetching data:", err);
//       setResponse("❌ Something went wrong while contacting Gemini.");
//     } finally {
//       setLoading(false);
//       setPrompt(""); 
//     }
//   };

//   return (
//     <div className="chatbot-container">
//       {}
//       <div
//         className={`chatbox-btn ${isOpen ? "open" : ""}`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         💬 Ask the Bot
//       </div>

//       {isOpen && (
//         <div className="chatbox">
//           <div className="chat-header">
//             <h3>🧠 Gemini Assistant</h3>
//             <button className="close-btn" onClick={() => setIsOpen(false)}>
//               ✖
//             </button>
//           </div>

//           <div className="chat-body">
//             {loading ? (
//               <p className="loading">Thinking...</p>
//             ) : response ? (
//               <div className="chat-message bot">
//                 {response.split("\n").map((line, i) => (
//                   <p key={i}>{line}</p>
//                 ))}
//                 {harmfulChemicals.length > 0 && (
//                   <div>
//                     <h4>Harmful Chemicals Detected:</h4>
//                     <ul>
//                       {harmfulChemicals.map((chem, i) => (
//                         <li key={i}>{chem}</li>
//                       ))}
//                     </ul>
//                     <h4>Why they are harmful:</h4>
//                     <p>{geminiInfo}</p>
//                     <p>Would you like to know safer alternatives?</p>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <p className="placeholder">Ask something about ingredients...</p>
//             )}
//           </div>

//           <form className="chat-form" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               value={prompt}
//               onChange={(e) => setPrompt(e.target.value)}
//               placeholder="Ask about a product..."
//               className="input-box"
//             />
//             <button type="submit" className="send-btn" title="Send">
//               📤
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Chatbot;
