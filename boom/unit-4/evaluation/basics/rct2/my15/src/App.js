import React from "react"
import './App.css';
// function Onclick(){
//   alert("wow")
// }
function Kutton(){
  return(<button onClick={handle}>
    <img src="https://media.istockphoto.com/id/1197474198/vector/burning-flames-effect-on-a-pentagram-symbol.jpg?s=612x612&w=0&k=20&c=H7gN5n38LPE41vnSd4Zy9p4kEch7J-k3mE8lKwxpcWk="
   alt="non" width="40%"></img>
   <h1>wow</h1>
  </button>)
}
function handle(){
  alert("wow");
}


function App() {
  return (
    <div className="App">
      <Kutton></Kutton>
    </div>
  );
}

export default App;
