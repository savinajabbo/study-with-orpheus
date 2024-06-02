import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import PomodoroTimer from '../components/PomodoroTimer';
import { BackgroundContext } from '../context/BackgroundContext';
import './css/focus.css';

function Focus() {
  const { focusBackground } = useContext(BackgroundContext);

  return (
    <div className='focus-container' style={{ 
      backgroundImage: `url(${focusBackground})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <PomodoroTimer />
      <Navbar />
    </div>
  );
};

export default Focus;
