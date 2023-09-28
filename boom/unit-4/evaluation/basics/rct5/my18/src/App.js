
// import './App.css';



// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;



import "./styles.css";
import React from "react";
// import Counter from "./Components/Counter";

export default function App() {
  
  return (<div className="App">
  <>
     <Counter />
     <Counter />
    </>
  </div>
  
  
   
  );
}


function Counter(){
  const[counter,setCounter]=React.useState(0)
  return (
    <>
      <h1>COUNT {counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>ADD</button>
      <button onClick={()=>setCounter(counter-1)}>REMOVE</button>
      
    </>
    
  );
}



