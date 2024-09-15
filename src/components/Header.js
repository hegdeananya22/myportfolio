import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="profile-info">
        <img src="path_to_small_girl_dra" alt="Small Girl Drawing" className="profile-img" />
        <div className="intro">
          <h1>Ananya Vinayak Hegde</h1>
          <p>MCA student</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact Info</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
