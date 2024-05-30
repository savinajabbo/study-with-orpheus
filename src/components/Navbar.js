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
      <Button to="/ambient">Ambient</Button>
      <Button to="/home">Home</Button>
      <Button to="/focus">Focus</Button>
      <Button onClick={toggleSettings}>Settings</Button>
      <Settings showSettings={showSettings} onClose={toggleSettings} />
    </div>
  );
}

export default Navbar;
