
import './App.css';

import React, { useRef } from "react";

function App() {
  return (
    <div className="App">
      <InputFocus></InputFocus>
    </div>
  );
}




const InputFocus = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default App;
