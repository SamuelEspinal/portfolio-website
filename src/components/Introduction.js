import React, { useEffect, useRef, useState } from 'react';
import '../styles/Introduction.css';

const Introduction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    const refValue = introRef.current; 
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set to true when the section is visible
        }
      },
      {
        threshold: 0.8, 
      }
    );
  
    if (refValue) {
      observer.observe(refValue);
    }
  
    return () => {
      if (refValue) {
        observer.unobserve(refValue);
      }
    };
  }, []);

  return (
    <section ref={introRef} className={`introduction ${isVisible ? 'visible' : ''}`}>
      <div className={`intro-content ${isVisible ? 'visible' : ''}`}>
        <h2>About Me</h2>
        <p>
        Hi there! My name is Samuel Espinal, and I am a passionate and enthusiastic software engineer with a strong drive for innovation and problem-solving. 
        Currently, I am contracted by the Department of Veterans Affairs, where I specialize in Identity and Access Management. 
        My work focuses on ensuring secure, seamless, and efficient access to critical systems, contributing to the protection and support of those who have served our nation.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
