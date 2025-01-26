import React from "react";
import "../styles/NecromanticSaga.css"; // Create a CSS file for styling if needed
import eclipseOftheNecromanticSagaImage from "../rsc/eclipseOftheNecromanticSaga.webp";

const NecromanticSaga = () => {
  return (
    <div className="rpg-game-page">
      <div className="rpg-game-header">
        <h1>Necromantic Saga</h1>
      </div>
      <div className="rpg-game-content">
        <div className="rpg-game-image">
          <img
            src={eclipseOftheNecromanticSagaImage}
            alt="Eclipse of the Necromantic Saga"
            className="rpg-game-image"
          />
        </div>
        <div className="rpg-game-header">
          <h1>Breakdown Coming Soon</h1>
        </div>
        <div className="rpg-game-links">
          <a href="https://github.com/SamuelEspinal/RPG-Game" target="_blank" rel="noopener noreferrer">
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default NecromanticSaga;