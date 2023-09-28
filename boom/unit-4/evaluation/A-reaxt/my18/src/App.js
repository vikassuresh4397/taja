
import './App.css';
import React, { useState, useEffect, useRef } from "react";


function App() {
  return (
    <div className="App">
      
    </div>
  );
}




const Timer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(time => {
          if (time <= 0) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setTime(initialTime);
    setIsRunning(false);
  };

  return (
    <div>
      <p>{time}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default App;
