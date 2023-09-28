import React, { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const storedCounter = localStorage.getItem("counter");
    if (storedCounter) {
      setCounter(parseInt(storedCounter));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counter", counter.toString());
  }, [counter]);

  const incrementCounter = (amount: number) => {
    setCounter((prevCounter) => prevCounter + amount);
  };

  return (
    <div className={styles.container}>
      <h1 data-testid="counter">{counter}</h1>
      <button
        data-testid="increment"
        onClick={() => incrementCounter(1)}
      >
        Increment
      </button>
      <button
        data-testid="decrement"
        onClick={() => incrementCounter(-1)}
      >
        Decrement
      </button>
      <button
        data-testid="increment5"
        onClick={() => incrementCounter(5)}
      >
        Increment 5 times
      </button>
      <button
        data-testid="decrement5"
        onClick={() => incrementCounter(-5)}
      >
        Decrement 5 times
      </button>
    </div>
  );
}

export default App;
