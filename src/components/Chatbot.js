import React, { useState } from "react";
import "../styles/Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [conversation, setConversation] = useState([
    { sender: "bot", text: "Hi! I’m here to tell you about my projects. Ask me a question below!" },
  ]);
  const [suggestions, setSuggestions] = useState([
    "What is your chess engine about?",
    "Can you tell me about the RPG game?",
    "What technologies do you use?",
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // Predefined responses
  const responses = {
    "What is your chess engine about?": {
      response:
        "My chess engine is written in Java and evaluates positional factors like pawn structure, king safety, and piece activity. It also includes a bot to play against!",
      suggestions: ["What makes your chess engine unique?", "What technologies did you use for the chess engine?"],
    },
    "Can you tell me about the RPG game?": {
      response:
        "The RPG game is a 2D adventure game inspired by Zelda. It's entirely coded in Java and features dynamic combat and an engaging story.",
      suggestions: ["What challenges did you face while building it?", "Can I see a demo of the game?"],
    },
    "What technologies do you use?": {
      response:
        "I’m proficient in Java, Python, and React for web development. I also work with machine learning frameworks like TensorFlow and PyTorch.",
      suggestions: ["What projects showcase your Python skills?", "Can you explain your AI chatbot project?"],
    },
  };

  const handleQuestionClick = (question) => {
    // Add user's message to the conversation
    setConversation((prev) => [...prev, { sender: "user", text: question }]);

    // Get the bot's response and suggestions
    const { response, suggestions: newSuggestions } = responses[question];

    // Simulate typing delay with the dot dot dot animation
    setIsTyping(true);
    setTimeout(() => {
      setConversation((prev) => [
        ...prev,
        { sender: "bot", text: response, animationClass: "fade-in" },
      ]);
      setIsTyping(false);

      // Add new suggestions after a short delay
      setTimeout(() => {
        setSuggestions(newSuggestions || []);
      }, 500); // Delay for suggestions
    }, 1500); // Typing animation delay
  };

  return (
    <div className="chatbot-container">
      {/* Chat Bubble Icon */}
      <div className={`chat-bubble ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        💬
      </div>
      {/* Chatbot Window */}
      <div className={`chatbot ${isOpen ? "open" : "closed"}`}>
        <div className="chat-window">
          <div className="chat-header">
            <span>Chat with Me</span>
          </div>
          <div className="chat-body">
            {conversation.map((message, index) => (
              <div
                key={index}
                className={`chat-message ${
                  message.sender === "bot" ? `bot ${message.animationClass || ""}` : "user"
                }`}
              >
                {message.text}
              </div>
            ))}
            {/* Typing Indicator */}
            {isTyping && (
              <div className="chat-message bot typing-indicator">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}
          </div>
          <div className="chat-footer">
            {suggestions.map((question, index) => (
              <button
                key={index}
                className="suggestion animate-pop"
                style={{ animationDelay: `${index * 0.1}s` }} // Staggered animation
                onClick={() => handleQuestionClick(question)}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
