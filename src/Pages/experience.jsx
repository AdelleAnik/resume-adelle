// components/Experience.jsx
import React from 'react';
import './experience.css';

const techIcons = {
  python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  csharp: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  redux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  postgres: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  cypress: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cypressio/cypressio-original.svg',
  azure: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
};

const Experience = () => (
  <div className="content">
    <h2 className="section-title">Experience</h2>

    <div className="experience-card">
      <div className="experience-header">
        <h3>Lateetud</h3>
        <span className="role">Software Engineer</span>
      </div>
      <p className="description">
        Spearheaded the development of a generative AI system that interprets and answers user queries by dynamically retrieving data from a complex database. Collaborated with a cross-functional team to integrate scalable AI capabilities and employed Python to develop robust backend processes.
      </p>
      <p className="expertise"><strong>Expertise:</strong> React, C#, Python</p>
      <div className="tech-icons">
        <img src={techIcons.react} alt="React" title="React" />
        <img src={techIcons.redux} alt="Redux" title="Redux" />
        <img src={techIcons.javascript} alt="JavaScript" title="JavaScript" />
        <img src={techIcons.csharp} alt="C#" />
        <img src={techIcons.python} alt="Python" title="Python" />
        <img src={techIcons.azure} alt="Azure DevOps" title="Azure DevOps" />
        <img src={techIcons.mysql} alt="MySQL" />
      </div>
    </div>

    <div className="experience-card">
      <div className="experience-header">
        <h3>Profitual Inc.</h3>
        <span className="role">Junior Full-Stack Developer</span>
      </div>
      <p className="description">
        Developed a dynamic SaaS platform that empowered startups with financial independence. Improved user experience metrics, mentored new team members, and implemented innovative features to streamline financial tracking and forecasting.
      </p>
      <p className="expertise">
        <strong>Expertise:</strong> React, Redux, JavaScript, PostgreSQL, Node.js, Docker, Cypress, Azure DevOps
      </p>
      <div className="tech-icons">
        <img src={techIcons.react} alt="React" title="React" />
        <img src={techIcons.redux} alt="Redux" title="Redux" />
        <img src={techIcons.javascript} alt="JavaScript" title="JavaScript" />
        <img src={techIcons.postgres} alt="PostgreSQL" title="PostgreSQL" />
        <img src={techIcons.nodejs} alt="Node.js" title="Node.js" />
        <img src={techIcons.docker} alt="Docker" title="Docker" />
        <img src={techIcons.cypress} alt="Cypress" title="Cypress" />
        <img src={techIcons.azure} alt="Azure DevOps" title="Azure DevOps" />
      </div>
    </div>
  </div>
);

export default Experience;
