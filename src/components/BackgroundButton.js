import React from 'react';
import './BackgroundButton.css';

const BackgroundButton = ({ onClick, backgroundSrc, altText }) => {
  return (
    <button className="background-button" onClick={onClick}>
      <img src={backgroundSrc} alt={altText} />
    </button>
  );
};

export default BackgroundButton;
