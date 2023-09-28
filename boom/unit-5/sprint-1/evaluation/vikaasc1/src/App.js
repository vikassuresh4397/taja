import "./App.css";
import { AddProject } from "./component/AddProject";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <AddProject />
    </div>
  );
}

export default App;
