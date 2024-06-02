import React, { useState } from 'react';
import Button from './Button';
import Settings from '../components/Settings';
import './navbar.css';

function Navbar() {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(prev => !prev);
  };

  return (
    <div className='navbar'>
      <Button to="/ambient">ambient</Button>
      <Button to="/home">home</Button>
      <Button to="/focus">focus</Button>
      <Button onClick={toggleSettings}>settings</Button>
      {showSettings && (
        <Settings 
          showSettings={showSettings}
          onClose={toggleSettings}
        />
      )}
    </div>
  );
}

export default Navbar;
