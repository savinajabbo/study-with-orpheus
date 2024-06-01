import React, { createContext, useState } from 'react';

export const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [selectedBackground, setSelectedBackground] = useState('default');

  return (
    <BackgroundContext.Provider value={{ selectedBackground, setSelectedBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};
