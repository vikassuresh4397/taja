import './App.css';

function App() {
  return (
    <div className="App">
      <Button></Button>
    </div>
  );
}

export default App;

function Button(){
  
 return (<button onClick={wow}>click me</button>) ;
}

function wow(){
return(alert("wwerwe"))
}