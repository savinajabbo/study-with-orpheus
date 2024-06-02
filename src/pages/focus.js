import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import PomodoroTimer from '../components/PomodoroTimer';
import { BackgroundContext } from '../context/BackgroundContext';
import './css/focus.css';
import orph from '../images/orpheus1.png';
import orph2 from '../images/orpheus2.png';

function Focus() {
  const { focusBackground } = useContext(BackgroundContext);
  const [hovered, setHovered] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0); 
  const messages = ["you got this!", "keep going!", "one day, or day one?", "you're making progress!", "stay focused!"]; 

  function handleHover() {
    setHovered(true);
    setMessageIndex((messageIndex + 1) % messages.length); // Cycle through messages
  }

  function handleHoverOut() {
    setHovered(false);
  }

  return (
    <div className='focus-container' style={{ 
      backgroundImage: `url(${focusBackground})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <PomodoroTimer />
      <Navbar />
      <img 
        src={hovered ? orph2 : orph} 
        alt="Orph" 
        style={{ 
          position: 'absolute', 
          bottom: '10px', 
          left: '0', 
          width: '10rem' 
        }}
        onMouseOver={handleHover}
        onMouseOut={handleHoverOut}
      />
      {hovered && <p style={{ position: 'absolute', bottom: '9.25rem', left: '7.1875rem', fontSize: '1rem', color: '#162A2B' }}>{messages[messageIndex]}</p>}
    </div>
  );
};

export default Focus;
