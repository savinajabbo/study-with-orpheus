import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import { BackgroundContext } from '../context/BackgroundContext';
import './css/ambient.css';

function Ambient() {
  const { ambientBackground } = useContext(BackgroundContext);

  return (
    <div className='ambient-container' style={{ 
      backgroundImage: `url(${ambientBackground})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
      <div>Ambient</div>
      <Navbar />
    </div>
  );
}

export default Ambient;
