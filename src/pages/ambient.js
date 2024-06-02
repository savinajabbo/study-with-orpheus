import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { BackgroundContext } from '../context/BackgroundContext';
import './css/ambient.css';

function Ambient() {
  const { ambientBackground } = useContext(BackgroundContext);
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
    <div className='ambient-container' style={{ 
      backgroundImage: `url(${ambientBackground})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <div className='time-and-quote'>
        <div className='clock'>{currentTime}</div>
        <div className='quote'><i>"Small steps lead to great achievements."</i></div>
      </div>
      <Navbar />
    </div>
  );
}

export default Ambient;
