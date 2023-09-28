import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Counter from './Components/Counter';
import { MainRoute } from './pages/MainRoute';

function App() {
  const [show,setShow] = useState(false);
  return (
    <div className="App">
     {/* <Counter></Counter>
     {show && <Counter></Counter>}
     <button onClick={()=>setShow(!show)}>show counter</button> */}
     <MainRoute></MainRoute>
    </div>
  );
}

export default App;
