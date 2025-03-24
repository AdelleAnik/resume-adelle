// components/Home.jsx
import React, { useEffect, useState } from 'react';
import './home.css';
import logo from '../Images/Adelle_Gomes-white-removebg-preview1.png';

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
      <div className="social">@reallygreatsite</div>
    </div>
  );
};

export default Home;
