// components/Section.jsx
import React from 'react';
import './Section.css';

const Section = ({ children }) => {
  return (
    <div className="section">
      {children && <div className="fade-in">{children}</div>}
    </div>
  );
};

export default Section;