import React, { useContext } from 'react';
import './settings.css';
import koibg from '../images/koi-bg.png';
import grassbg from '../images/grass-bg.png';
import aurabg from '../images/aura.png';
import { BackgroundContext } from '../context/BackgroundContext';
import { useLocation } from 'react-router-dom';

const Settings = ({ showSettings, onClose }) => {
  const { setHomeBackground, setFocusBackground, setAmbientBackground } = useContext(BackgroundContext);
  const location = useLocation();

  const handleBackgroundChange = (background) => {
    if (location.pathname === '/home') {
      setHomeBackground(background);
    } else if (location.pathname === '/focus') {
      setFocusBackground(background);
    } else if (location.pathname === '/ambient') {
      setAmbientBackground(background);
    }
  };

  return (
    <div className={`settings-container ${showSettings ? 'show' : ''}`}>
      <div className="settings-content">
        <h2>Settings</h2>
        <label htmlFor="backgroundSelect">Select Background:</label>
        <ul className="settings-navigation">
          <li>
            <button onClick={() => handleBackgroundChange(koibg)} className='settings-bg'>
              <img src={koibg} alt="koi fish background" />
            </button>
          </li>
          <li>
            <button onClick={() => handleBackgroundChange(grassbg)} className='settings-bg'>
              <img src={grassbg} alt="grass background" />
            </button>
          </li>
          <li>
            <button onClick={() => handleBackgroundChange(aurabg)} className='settings-bg'>
              <img src={aurabg} alt="aura background" />
            </button>
          </li>
        </ul>
      </div>
      <span className="close-button" onClick={onClose}>X</span>
    </div>
  );
};

export default Settings;
