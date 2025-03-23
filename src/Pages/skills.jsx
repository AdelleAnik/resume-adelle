// components/Skills.jsx
import React from 'react';

const skills = [
  'React', 'Redux', 'JavaScript', 'NodeJs', 'Python', 'PostgreSQL',
  'GraphQL', 'HTML', 'CSS', 'Cypress', 'REST/API', 'GitHub', 'Azure DevOps'
];

const Skills = () => (
  <div className="content">
    <h2>Skills</h2>
    <ul className="skills-list">
      {skills.map((skill, index) => <li key={index}>{skill}</li>)}
    </ul>
  </div>
);

export default Skills;