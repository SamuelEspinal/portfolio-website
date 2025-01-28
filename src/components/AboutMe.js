import React from "react";
import "../styles/AboutMe.css";
import selfPhoto from "../rsc/PictureOfMeForWebsite.jpeg";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="about-me-page">
      <div className="chess-game-header">
        <h1>About Me</h1>
      </div>
      <div className="about-me-container">
        <div className="about-me-image">
                <img
                    src={selfPhoto}
                    alt="myself"
                    className="about-me-image"
                />
        </div>
        <p>
          Hi, I'm <span className="word-highlight">Samuel Espinal,</span> a passionate software developer with expertise in Java and Python.
          I have a deep love for creating innovative projects, whether it's crafting a smart chess engine,
          developing an RPG game from scratch, or experimenting with AI chatbots and Machine Learning.
        </p>
        <p>
          My journey in software development is fueled by my curiosity and excitement for solving problems and taking my interests and turning them into a project.
          I enjoy designing and implementing my interests into something that someone can boot up on their computer and interact with.
        </p>
        <p>
          Outside of coding, I love playing video games and board games, photography, and listening to music.
          These passions have led me to create some of the projects you'll see here on my website.
        </p>
        <p>
          Feel free to explore these projects, and don't hesitate to reach out if you'd like to collaborate or
          just chat about technology! 
        </p>
      </div>
      <Link to="/contactMe" className="contact-button">Contact Me</Link>
    </div>
  );
};

export default AboutMe;
