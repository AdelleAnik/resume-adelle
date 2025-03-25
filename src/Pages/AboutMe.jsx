import React, { useState } from 'react';
import '../Components/Easteregg.css'; // contains the pet-parade animation styles
import '../Pages/AboutMe.css'; // contains the pet-parade animation styles
import useKonamiCode from '../Components/KonamiCode';
import bunnyGif from '../Images/01636c5434cd0462086620c60fdfec16.gif';
import catGif from '../Images/catgif.gif';

const About = () => {
  const [showPets, setShowPets] = useState(false);

  useKonamiCode(() => {
    setShowPets(true);
    setTimeout(() => setShowPets(false), 7000); // hide after 10s
  });

  return (
    <div className="about-wrapper">
      <div className="content">
        <h2>About Me</h2>
        <p>
          Outside of work, you’ll usually find me singing (sometimes mid-cook 🎶), dancing around the house, or whipping up something delicious from scratch. I love cooking and baking almost as much as I love JavaScript (almost). I also play the guitar, and my love for music runs deep — it keeps me grounded and inspired. 🎸🎵
        </p>

        <p>
          I’m a big fan of board games ♟️ and video games 🎮 — especially when it means sharing laughs with friends. Whether it’s a round of cooperative strategy or a chaotic party game, I’m all in.
        </p>

        <p>
          And yes — I’m a proud <span className="ravenclaw">Ravenclaw</span> 💙🦅 and a longtime Harry Potter fan.
          If you ever need someone for magical trivia, let me know!!
          <br />
          <em className="hp-quote">“Wit beyond measure is man’s greatest treasure.”</em>
        </p>

        <p>
          I also share my space with two pixel-perfect sidekicks — a gray cat and a black-and-white bunny.
          They don’t code, but if you know the secret sequence, you might just see them <span className="hop-hint">hop</span> by. 🐾
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
