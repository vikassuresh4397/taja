
import './App.css';
import Avatar from './Avatar';

let design = {
  color:"red",
  backgroundColor:"green",
  name:"Vikas Suresh",
};


function App() {
  return (
    <div className="App">
      <Avatar style={{color:design.color, backgroundColor:design.backgroundColor}} name={design.name} ></Avatar>
    </div>
  );
}

export default App;
