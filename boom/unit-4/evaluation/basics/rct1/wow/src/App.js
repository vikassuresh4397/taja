
import './App.css';

import Greeting from './Components/Greeting';

function Boom(){
  return(<div>hello</div>)
}

function App() {
  return (
    <div className="App">
      <Greeting />
      <Boom />
    </div>
  );
}

export default App;
