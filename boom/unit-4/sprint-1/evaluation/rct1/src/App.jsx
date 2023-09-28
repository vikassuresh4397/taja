import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function resetCount() {
    setCount(0);
  }

  function isEven() {
    return count % 2 === 0 ? "Even" : "Odd";
  }

  function isPrime() {
    if (count === 0 || count === 1) return "false";
    for (let i = 2; i < count; i++) {
      if (count % i === 0) return "false";
    }
    return "true";
  }

  return (
    <div>
      <span data-testid="counter">{count}</span>
      <button data-testid="plusonebtn" onClick={incrementCount}>
        Increment
      </button>
      <button
        data-testid="minusonebtn"
        disabled={count === 0}
        onClick={decrementCount}
      >
        Decrement
      </button>
      <button data-testid="resetbtn" onClick={resetCount}>
        Reset
      </button>
      <span data-testid="odd-or-even">{isEven()}</span>
      <span data-testid="is-prime">{isPrime()}</span>
    </div>
  );
}

export default App;
