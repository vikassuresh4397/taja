import "./App.css";

import React from "react";

import { useToggleItems } from "./hooks/useToggleItems";

function App() {

  const [state, karotooglestateko] = useToggleItems( ["A", "B", "C"] , 1);

  return (
    <div className="App">
    
      <h1 data-testid="status">{state}</h1>

      <button data-testid="toggle" onClick={karotooglestateko}>

        Toggle

      </button>

    </div>
  );
}

export default App;
