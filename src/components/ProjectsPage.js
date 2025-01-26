import React from "react";
import scorpionChessImage from "../rsc/scorpionChess.webp";
import shakespeareAIImage from "../rsc/shakespeareAI.webp";
import eclipseOftheNecromanticSagaImage from "../rsc/eclipseOftheNecromanticSaga.webp";
import "../styles/ProjectsPage.css";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Chess Game",
      description:
        "A fun chess game with a smart bot you can play against. Built with Java.",
      image: scorpionChessImage,
      link: "/projects/scorpion-chess",
    },
    {
      id: 2,
      title: "2D RPG",
      description:
        "An immersive 2D adventure game inspired by Zelda. Fully coded in Java.",
      image: eclipseOftheNecromanticSagaImage, 
      link: "/projects/rpg-game",
    },
    {
      id: 3,
      title: "Shakespeare AI",
      description:
        "An AI-powered GPT that mimics shakespearean conversation. Built with Python.",
      image: shakespeareAIImage, 
      link: "/projects/shakespeare-ai",
    },
  ];

  return (
    <div className="projects-page">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="projectPage-card"
            onClick={() => (window.location.href = project.link)}
          >
            <div
              className="card-image"
              style={{ backgroundImage: `url(${project.image})` }}
            >
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
