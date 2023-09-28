import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(time + 1);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => setTime(0);

  const formatTime = (time) => {
    const milliseconds = time % 100;
    let seconds = Math.floor(time / 100);
    let minutes = 0;
    let hours = 0;
    if (seconds >= 60) {
      minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
    }
    if (minutes >= 60) {
      hours = Math.floor(minutes / 60);
      minutes = minutes % 60;
    }
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(
      2,
      '0'
    )}`;
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <p>{formatTime(time)}</p>
      <div>
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={handleReset} disabled={isRunning}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
