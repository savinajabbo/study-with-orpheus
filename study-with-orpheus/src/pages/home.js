import React, { useState, useEffect } from 'react';
import './css/home.css';
import Navbar from '../components/Navbar';

function Home() {
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
    <div className='study-container'>
      <div style={{ textAlign: 'center', marginTop: '50vh', transform: 'translateY(-50%)' }}>
        <h2>see ya later cutie pie ;)</h2>
        <h1>{currentTime}</h1>
      </div>
      <Navbar />
    </div>
  );
}

export default Home;
