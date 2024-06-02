import React, { useState, useEffect } from 'react';
import './css/pomodorotimer.css';
import Button from './Button';

function PomodoroTimer() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [isWorking, setIsWorking] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); 
  const [showSettings, setShowSettings] = useState(false);
  const [workTime, setWorkTime] = useState(25);
  const [shortBreakTime, setShortBreakTime] = useState(5);
  const [longBreakTime, setLongBreakTime] = useState(15);
  const [isPaused, setIsPaused] = useState(true);
  const [isInitialPlay, setIsInitialPlay] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
      if (!isPaused && timeLeft > 0) {
        setTimeLeft(prevTimeLeft => prevTimeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPaused, timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsWorking(!isWorking);
      if (isWorking) {
        setTimeLeft(shortBreakTime * 60);
      } else {
        setTimeLeft(workTime * 60);
      }
    }
  }, [timeLeft]);

  function getCurrentTime() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric' };
    return now.toLocaleTimeString([], options);
  }

  function startTimer() {
    setIsPaused(false);
    setTimeLeft(workTime * 60);
    setIsWorking(true);
    setIsInitialPlay(false);
  }

  function startShortBreak() {
    if (!isInitialPlay) {
      setIsPaused(false);
      setIsWorking(false);
      setTimeLeft(shortBreakTime * 60);
    }
  }

  function startLongBreak() {
    if (!isInitialPlay) {
      setIsPaused(false);
      setIsWorking(false);
      setTimeLeft(longBreakTime * 60);
    }
  }

  function toggleSettings() {
    setShowSettings(!showSettings);
  }

  function togglePause() {
    setIsPaused(!isPaused);
  }

  return (
    <div className='pomodoro-container'>
      <div className='controls'>
        <Button onClick={startTimer}>focus</Button>
        <Button onClick={startShortBreak}>short break</Button>
        <Button onClick={startLongBreak}>long break</Button>
        <Button onClick={toggleSettings}>settings</Button>
      </div>
      <div className='timer'>
        <h1>{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</h1>
      </div>
      <div className='play-pause'>
        <Button onClick={togglePause}>{isPaused ? "play" : "pause"}</Button>
      </div>
      {showSettings && (
        <div className='settings'>
          <h2>Settings</h2>
          <label>Work Time (minutes):</label>
          <input type='number' value={workTime} onChange={(e) => setWorkTime(parseInt(e.target.value))} />
          <label>Short Break Time (minutes):</label>
          <input type='number' value={shortBreakTime} onChange={(e) => setShortBreakTime(parseInt(e.target.value))} />
          <label>Long Break Time (minutes):</label>
          <input type='number' value={longBreakTime} onChange={(e) => setLongBreakTime(parseInt(e.target.value))} />
        </div>
      )}
    </div>
  );
}

export default PomodoroTimer;
