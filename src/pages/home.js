import React, { useState, useEffect, useContext } from 'react';
import './css/home.css';
import Navbar from '../components/Navbar';
import { BackgroundContext } from '../components/BackgroundContext';

function Home() {
  const { selectedBackground } = useContext(BackgroundContext);
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

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

  return (
    <div className='study-container' style={{ 
      backgroundImage: `url(${selectedBackground})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <div style={{ textAlign: 'center', marginTop: '50vh', transform: 'translateY(-50%)' }}>
        <h2>"insert random quote here"</h2>
        <h1 className='current-time'>{currentTime}</h1>
      </div>
      <Navbar />
    </div>
  );
}

export default Home;