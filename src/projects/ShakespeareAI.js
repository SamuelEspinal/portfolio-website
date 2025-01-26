import React from "react";
import "../styles/ShakespeareAI.css";
import shakespeareImage from "../rsc/shakespeareAI.webp"; // Replace with your Shakespeare AI image

const ShakespeareAI = () => {
  return (
    <div className="ai-project-page">
      <div className="ai-project-header">
        <h1>Shakespeare AI</h1>
      </div>
      <div className="ai-project-content">
        <div className="ai-project-image">
          <img
            src={shakespeareImage}
            alt="Shakespeare AI Visualization"
            className="ai-project-image"
          />
        </div>
        <div className="ai-project-header">
          <h1>Breakdown Coming Soon</h1>
        </div>
        <div className="ai-project-links">
          <a href="https://github.com/SamuelEspinal/Project-EYE" target="_blank" rel="noopener noreferrer">
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShakespeareAI;
