
import './App.css';
// import Button from "./Components/Button"

function handle(){
  alert("wwj")
}

function App() {


  return (
    <div className="App">
      <Button></Button>
    </div>
  );
}

function Button(){

    return (<>
    <button onClick={handle}>click me</button>
        wowowo
    </>)
}

export default App;
