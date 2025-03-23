// components/Education.jsx
import React from 'react';
import './experience.css';

const educationDetails = [
  {
    institution: 'New Brunswick Community College - NBCC',
    degree: 'IT-Programmer Analyst',
    year: '2021',
    // logo: 'https://upload.wikimedia.org/wikipedia/en/3/3f/New_Brunswick_Community_College_logo.png'
  },
  {
    institution: 'Universidade Estadual de Campinas - UNICAMP',
    degree: 'Environmental Control Technology, Environmental Science',
    year: '2017',
    // logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Logo_unicamp.svg'
  }
];

const Education = () => (
  <div className="content">
    <h2 className="section-title">Education</h2>
    {educationDetails.map((edu, index) => (
      <div className="experience-card" key={index}>
        <div className="experience-header">
          <h3>
            {/* <img
              src={edu.logo}
              alt={`${edu.institution} logo`}
              title={edu.institution}
              style={{ height: '28px', marginRight: '0.5rem', verticalAlign: 'middle' }}
            /> */}
            {edu.institution}
          </h3>
          <span className="role">{edu.degree}</span>
        </div>
        <div style={{ marginTop: '0.5rem', color: '#ccc', fontSize: '0.85rem' }}>
          🎓 Graduated: {edu.year}
        </div>
      </div>
    ))}
  </div>
);

export default Education;
