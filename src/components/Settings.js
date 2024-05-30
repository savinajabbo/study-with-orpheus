import React, { useState } from 'react';
import './settings.css';
import background1 from '../images/background1.jpeg';
import background2 from '../images/background2.jpeg';
import background3 from '../images/background3.jpeg';

export const Settings = ({ showSettings, onClose }) => {
  const [selectedBackground, setSelectedBackground] = useState('default');

  const handleBackgroundChange = (background) => {
    setSelectedBackground(background);
  };

  return (
    <div style={{ 
      backgroundImage: `url(${selectedBackground})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }} className={showSettings ? 'settings-container show' : 'settings-container'}>
      <div className="settings-content">
        <h2>Settings</h2>
        <label htmlFor="backgroundSelect">Select Background:</label>
        <div className="settings-navigation">
          <button onClick={() => handleBackgroundChange(background1)}><img src={background1} alt="Background 1" /></button>
          <button onClick={() => handleBackgroundChange(background2)}><img src={background2} alt="Background 1" /></button>
          <button onClick={() => handleBackgroundChange(background3)}><img src={background3} alt="Background 1" /></button>
        </div>
      </div>
      <span className="close-button" onClick={onClose}>X</span>
    </div>
  );
};

export const selectedBackground = Settings.selectedBackground;
export const background = Settings.background;
console.log(selectedBackground)
console.log("hello")
export const handleBackgroundChange = Settings.handleBackgroundChange;
export default Settings;