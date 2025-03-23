// components/Home.jsx
import React, { useEffect, useState } from 'react';
import './home.css';
import logo from '../Images/AdelleGomes-removebg-preview.png';

const Home = ({ setActiveSection }) => {
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingDone(true);
    }, 970); // match typing animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <img src={logo} alt="Logo" className="main-logo" />
      <div className="home-inner">
        <div className="logo" />
        <h1 className={`title ${typingDone ? 'typing-done' : ''}`}>Adelle Gomes</h1>
        <h2 className="subtitle">Software Engineer </h2>
        <h2 className="subtitle2"> Full-Stack Developer | Front-End Developer</h2>
        <div className="nav-buttons">
          <button onClick={() => setActiveSection('experience')}>Experience</button>
          <button onClick={() => setActiveSection('skills')}>Skills</button>
          <button onClick={() => setActiveSection('education')}>Education</button>
          <button onClick={() => setActiveSection('about')}>About Me</button>
          <button onClick={() => setActiveSection('contact')}>Contact Me</button>
        </div>
      </div>
      <div className="social">@reallygreatsite</div>
    </div>
  );
};

export default Home;


