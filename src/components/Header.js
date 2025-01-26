import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">
          <Link to="/">Samuel Espinal</Link>
        </h1>
        <ul className="nav-links">
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/aboutMe">About</Link></li>
          <li><Link to="/contactMe">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
