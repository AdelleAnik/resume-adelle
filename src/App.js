import React, { useState } from 'react';
import Home from './Pages/home';
import Section from './Pages/Section';
import Experience from './Pages/experience';
import Skills from './Pages/skills';
import Education from './Pages/education';
import Contact from './Pages/contactMe';
import BackgroundPulse from './Pages/BackgroundPulse';
import About from './Pages/AboutMe';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('experience');
 
  const renderSection = () => {
    switch (activeSection) {
      case 'experience': return <Experience />;
      case 'skills': return <Skills />;
      case 'education': return <Education />;
      case 'contact': return <Contact />;
      case 'about': return <About />;
      default: return null;
    }
  };

  return (
    <div className="app">
      <BackgroundPulse />
      <div className="main">
        <Home setActiveSection={setActiveSection} />
        <Section>{renderSection()}</Section>
      </div>
    </div>
  );
};

export default App;