import React, { useState, useEffect, useContext } from 'react';
import './css/home.css';
import Navbar from '../components/Navbar';
import { BackgroundContext } from '../context/BackgroundContext';
import orph from '../images/orpheus1.png';
import orph2 from '../images/orpheus2.png';

function Home() {
  const { homeBackground } = useContext(BackgroundContext);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [hovered, setHovered] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0); 
  const messages = ["you got this!", "keep going!", "one day, or day one?", "you're making progress!", "stay focused!"]; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric' };
    return now.toLocaleTimeString([], options);
  }

  function handleHover() {
    setHovered(true);
    setMessageIndex((messageIndex + 1) % messages.length); // Cycle through messages
  }

  function handleHoverOut() {
    setHovered(false);
  }

  return (
    <div className='study-container' style={{ 
      position: 'relative',
      backgroundImage: `url(${homeBackground})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <div style={{ textAlign: 'right', marginTop: '20px', marginRight: '20px' }}>
        <h2 className='home-quote'><i>"Small steps lead to great achievements."</i></h2>
      </div>
      <div style={{ textAlign: 'center', marginTop: '50vh', transform: 'translateY(-50%)' }}>
        <h1 className='current-time'>{currentTime}</h1>
      </div>
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
}

export default Home;
