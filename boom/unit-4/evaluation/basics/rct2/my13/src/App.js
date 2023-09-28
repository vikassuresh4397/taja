
import './App.css';
import React from "react"


function App() {
  const [counter, setCounter]=React.useState(0);
  return (
    <div className="App">
        <h1>Counter {counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>Add</button>
        <button onClick={()=>setCounter(counter-1)}>Reduce</button>
    </div>
  );
}

export default App;


