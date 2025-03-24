// components/Skills.jsx
import React from 'react';
import './home.css'

const Skills = () => (
  <div className="skills-section">
  <h2 className="skills-title">Skills</h2>

  <h3 className="skill-category">Frontend</h3>
  <div className="skill-row">
    <span className="skill-tag">React</span>
    <span className="skill-tag">Redux</span>
    <span className="skill-tag">JavaScript</span>
    <span className="skill-tag">HTML</span>
    <span className="skill-tag">CSS</span>
  </div>

  <h3 className="skill-category">Backend</h3>
  <div className="skill-row">
    <span className="skill-tag">NodeJs</span>
    <span className="skill-tag">Python</span>
    <span className="skill-tag">REST/API</span>
    <span className="skill-tag">GraphQL</span>
  </div>

  <h3 className="skill-category">Dev Tools</h3>
  <div className="skill-row">
    <span className="skill-tag">GitHub</span>
    <span className="skill-tag">Azure DevOps</span>
    <span className="skill-tag">PostgreSQL</span>
    <span className="skill-tag">Cypress</span>
  </div>
</div>

);

export default Skills;