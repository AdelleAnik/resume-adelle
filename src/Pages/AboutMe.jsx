import React, { useState } from 'react';
import '../Components/Easteregg.css'; // contains the pet-parade animation styles
import useKonamiCode from '../Components/KonamiCode';
import bunnyGif from '../Images/01636c5434cd0462086620c60fdfec16.gif';
import catGif from '../Images/catgif.gif';

const About = () => {
  const [showPets, setShowPets] = useState(false);

  useKonamiCode(() => {
    setShowPets(true);
    setTimeout(() => setShowPets(false), 10000); // hide after 10s
  });

  return (
    <div className="about-wrapper">
      <div className="content">
        <h2>About Me</h2>
        <p>
          I'm Adelle Gomes, a passionate Software Engineer with a love for blending creativity and logic into sleek, user-focused digital experiences. My journey into development started with a curiosity for how things work and evolved into a full-blown obsession with writing clean, scalable code.
        </p>
        <p>
          I bring experience across front-end and back-end technologies — from React and Redux to Node.js, PostgreSQL, and Docker. I thrive in collaborative environments, enjoy mentoring, and am constantly seeking to improve through new challenges.
        </p>
        <p>
          When I'm not coding, you'll find me sketching UI ideas, geeking out over design systems, or experimenting with new web animations. ✨
        </p>
        <p>
          I also share my space with two pixel-perfect sidekicks — a gray cat and a black-and-white bunny. They don’t code, but if you know the secret sequence, you might just see them hop by. 🐾
        </p>

        {showPets && (
          <div className="pet-parade">
            <img src={bunnyGif} alt="Bunny" className="pet bunny" />
            <img src={catGif} alt="Cat" className="pet cat" />
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
