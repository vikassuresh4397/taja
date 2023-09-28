


import './App.css';
import Button from "./Button"

const design = {
  backgroundColor: "blue",
  color:"red",
};

function App() {
  return (
    <div className="App">
      <Button style={design}>Click me</Button>
    </div>
  );
}




export default App;

