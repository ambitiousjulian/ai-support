import React, { useState } from 'react';
import './App.css';
import { FaGithub } from 'react-icons/fa'; 

const dataset = [
  {
    question: "What does the eligibility verification agent (EVA) do?",
    answer: "EVA automates the process of verifying a patient’s eligibility and benefits information in real-time, eliminating manual data entry errors and reducing claim rejections."
  },
  {
    question: "What does the claims processing agent (CAM) do?",
    answer: "CAM streamlines the submission and management of claims, improving accuracy, reducing manual intervention, and accelerating reimbursements."
  },
  {
    question: "How does the payment posting agent (PHIL) work?",
    answer: "PHIL automates the posting of payments to patient accounts, ensuring fast, accurate reconciliation of payments and reducing administrative burden."
  },
  {
    question: "Tell me about Thoughtful AI's Agents.",
    answer: "Thoughtful AI provides a suite of AI-powered automation agents designed to streamline healthcare processes. These include Eligibility Verification (EVA), Claims Processing (CAM), and Payment Posting (PHIL), among others."
  },
  {
    question: "What are the benefits of using Thoughtful AI's agents?",
    answer: "Using Thoughtful AI's Agents can significantly reduce administrative costs, improve operational efficiency, and reduce errors in critical processes like claims management and payment posting."
  }
];

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleAsk = () => {
    const query = input.toLowerCase();
    const found = dataset.find(qa => query.includes(qa.question.toLowerCase()));
    if (found) {
      setResponse(found.answer);
    } else {
      setResponse("Sorry, I don't have an answer for that. Please try again.");
    }
  };

  return (
    <div className="App">
      <div className="chat-box">
        <h1>Thoughtful AI Support Agent</h1>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything about Thoughtful AI" 
          className="input-field"
        />
        <button onClick={handleAsk} className="ask-button">
          Ask
        </button>
        <div className="response-box">
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      </div>

      <footer className="footer">
        <a href="https://github.com/ambitiousjulian/ai-support.git" target="_blank" rel="noopener noreferrer" className="github-link">
          <FaGithub className="github-icon" /> View on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
