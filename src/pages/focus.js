import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import PomodoroTimer from '../components/PomodoroTimer';
import { BackgroundContext } from '../components/BackgroundContext';
import './css/focus.css';

function Focus() {
  const { selectedBackground } = useContext(BackgroundContext);

  return (
    <div className='focus-container' style={{ 
      backgroundImage: `url(${selectedBackground})`,
    }}>
      <PomodoroTimer />
      <Navbar />
    </div>
  );
};

export default Focus;
