import React, { useState, useContext } from 'react';
import './settings.css';
import background1 from '../images/background1.jpeg';
import background2 from '../images/background2.jpeg';
import background3 from '../images/background3.jpeg';
import { BackgroundContext } from './BackgroundContext';

export const Settings = ({ showSettings, onClose }) => {
  const { setSelectedBackground } = useContext(BackgroundContext);
  const [localBackground, setLocalBackground] = useState('default');

  const handleBackgroundChange = (background) => {
    setLocalBackground(background); // update local state in Settings
    setSelectedBackground(background); // update global state
  };

  return (
    <div style={{ 
      backgroundColor: 'white'
    }} className={showSettings ? 'settings-container show' : 'settings-container'}>
      <div className="settings-content">
        <h2>Settings</h2>
        <label htmlFor="backgroundSelect">Select Background:</label>
        <div className="settings-navigation">
          <button onClick={() => handleBackgroundChange(background1)}><img src={background1} alt="Background 1" /></button>
          <button onClick={() => handleBackgroundChange(background2)}><img src={background2} alt="Background 2" /></button>
          <button onClick={() => handleBackgroundChange(background3)}><img src={background3} alt="Background 3" /></button>
        </div>
      </div>
      <span className="close-button" onClick={onClose}>X</span>
    </div>
  );
};

export default Settings;
