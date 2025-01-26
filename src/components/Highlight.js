import React from 'react';
import '../styles/Highlight.css';

const Highlight = () => {
  const projects = [
    {
      title: "Chess Game",
      description: "A fun chess game with a smart bot you can play against.",
      link: "#chess-game",
    },
    {
      title: "2D RPG",
      description: "A fully coded Java RPG with exciting adventures.",
      link: "#rpg-game",
    },
    {
      title: "Chatbot",
      description: "An AI chatbot that learns and responds like a human.",
      link: "#chatbot",
    },
  ];

  return (
    <section className="highlight">
      <h2>Featured Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlight;
