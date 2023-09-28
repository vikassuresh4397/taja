
import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      <Boom></Boom>
    </div>
  );
}

export default App;



function Boom(){
  const [counter,setCounter]=React.useState(0);

  function wow(e){
    setCounter((e)=>(e+100));
    // setCounter(counter+100);
  }

  function boom(){
    setCounter(counter-100)
  }

  return(
    <>
      <h1>count : {counter}</h1>
      <button onClick={wow}>Add</button>
      <button onClick={boom}>Reduce</button>
    </>
  )
}