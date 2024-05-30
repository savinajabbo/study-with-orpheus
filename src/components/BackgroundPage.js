import React from 'react';
import { useLocation } from 'react-router-dom';

const BackgroundPage = () => {
  const location = useLocation();
  const selectedBackground = new URLSearchParams(location.search).get('background');

  return (
    <div style={{ backgroundImage: `url(${selectedBackground})`, backgroundSize: 'cover', height: '100vh' }}>
      {/* Add any content you want to display on this page */}
    </div>
  );
};

export default BackgroundPage;
