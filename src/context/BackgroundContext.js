import React, { createContext, useState } from 'react';

const BackgroundContext = createContext();

const BackgroundProvider = ({ children }) => {
  const [homeBackground, setHomeBackground] = useState('default');
  const [focusBackground, setFocusBackground] = useState('default');
  const [ambientBackground, setAmbientBackground] = useState('default');

  return (
    <BackgroundContext.Provider value={{
      homeBackground,
      focusBackground,
      ambientBackground,
      setHomeBackground,
      setFocusBackground,
      setAmbientBackground,
    }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export { BackgroundContext, BackgroundProvider };
