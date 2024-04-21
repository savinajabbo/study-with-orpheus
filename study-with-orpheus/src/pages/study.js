import React, { useState, useEffect } from 'react';

function Study() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric' };
    return now.toLocaleTimeString([], options);
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50vh', transform: 'translateY(-50%)' }}>
      <h2>"see ya later cutie pie ;)"</h2>
      <h1>{currentTime}</h1>
    </div>
  );
}

export default Study;
