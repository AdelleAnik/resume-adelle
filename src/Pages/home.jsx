// components/Home.jsx
import React, { useEffect, useState } from 'react';
import './home.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import logo from '../Images/Adelle_Gomes-white-removebg-preview1.png';
import { Typography } from '@mui/material';

const Home = ({ setActiveSection }) => {
  const [typingDone, setTypingDone] = useState(false);
  const [activeButton, setActiveButton] = useState('experience');

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingDone(true);
    }, 970);

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = (section) => {
    setActiveButton(section);
    setActiveSection(section);
  };

  return (
    <div className="home">
      <img src={logo} alt="Logo" className="main-logo" />
      <div className="home-inner">
        <div className="logo" />
        <h1 className={`title ${typingDone ? 'typing-done' : ''}`}>Adelle Gomes</h1>
        <h2 className="subtitle">Software Engineer </h2>
        <h2 className="subtitle2"> Full-Stack Developer | Front-End Developer</h2>
        <p className="subtitle2">
          Hi! 👋 I'm Adelle Gomes, a passionate Software Engineer with a love for blending creativity and logic into sleek, user-focused digital experiences. My journey into development started with a curiosity for how things work and evolved into a full-blown obsession with writing code.
        </p>
        <div className="nav-buttons">
          <button
            onClick={() => handleButtonClick('experience')}
            className={activeButton === 'experience' ? 'active' : ''}
          >
            Experience
          </button>
          <button
            onClick={() => handleButtonClick('skills')}
            className={activeButton === 'skills' ? 'active' : ''}
          >
            Skills
          </button>
          <button
            onClick={() => handleButtonClick('education')}
            className={activeButton === 'education' ? 'active' : ''}
          >
            Education
          </button>
          <button
            onClick={() => handleButtonClick('about')}
            className={activeButton === 'about' ? 'active' : ''}
          >
            About Me
          </button>
          <button
            onClick={() => handleButtonClick('contact')}
            className={activeButton === 'contact' ? 'active' : ''}
          >
            Contact Me
          </button>
        </div>
      </div>
      <div className="social">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/adelle-anik-araujo-gomes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="icon" />
          </a>
          <a
            href="https://github.com/AdelleAnik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon className="icon" />
          </a>
          <Typography className="subtitle3">
            © 2025 Adelle Gomes. All rights reserved.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Home;
