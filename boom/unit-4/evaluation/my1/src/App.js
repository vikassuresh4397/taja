import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

const handleClick = () => {
setCount(count + 1);

};

  return (
    <div className="App">
      <div>
<button onClick={handleClick}>Click me</button>
<h1>Clicked {count} times</h1>
</div>
    </div>
  );
}

export default App;

