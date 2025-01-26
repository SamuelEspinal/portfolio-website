import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const HeaderName = "Hi, I'm Samuel Espinal";
  const renderAnimatedText = (text) =>
    text.split("").map((char, index) => (
      <span
        key={index}
        className={`animated-letters ${
          hoveredIndex === index ? "hovered" : hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1 ? "nearby" : ""
        }`}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {char === " " ? "\u00A0" : char} {/* Handle spaces */}
      </span>
    ));

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{renderAnimatedText(HeaderName)}</h1>
        <p>Software Developer | Creator | Innovator</p>
        <div className="button-group">
          <Link to="/projects" className="cta-button">View My Projects</Link>
          <a
            href="https://github.com/SamuelEspinal/portfolio-website"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Site Source Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
