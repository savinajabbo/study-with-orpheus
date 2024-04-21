import React from 'react';
import Button from './Button';
import './navbar.css';

function Navbar() {
  return (
    <div className='study-container'>
      <div className='navbar'>
        <Button to="/ambient">Ambient</Button>
        <Button to="/home">Home</Button>
        <Button to="/focus">Focus</Button>
        <Button>Settings</Button>
      </div>
    </div>
  );
};

export default Navbar;