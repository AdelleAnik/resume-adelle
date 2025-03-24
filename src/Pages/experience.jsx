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
    <div className="scrollable-experience">
      <div className="experience-card">
        <div className="experience-header">
          <h3>Lateetud</h3>
          <div className="position-info">
            <span className="role">Software Engineer</span>
            <span className="date">2024–present</span>
          </div>

        </div>
        <p className="description">
          Worked on the development of a generative AI system designed to understand and respond to user questions by pulling the right information from a complex database in real time. On the backend, I used Python to create reliable and efficient processes that keep everything running smoothly.
        </p>
        <p className="description">
          Lately, I’ve been working on a fax processing platform where I’m using React on the frontend and C# on the backend. Most of my work involves integrating APIs to fetch and manage data, and I’ve been working with MySQL to handle everything on the database side. It’s been a great opportunity to blend frontend and backend work in a real-world, data-heavy environment.
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
          <div className="position-info">
            <span className="role">Junior Full-Stack Developer</span>
            <span className="date">2021-2023</span>
          </div>
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
  </div>
);

export default Experience;
