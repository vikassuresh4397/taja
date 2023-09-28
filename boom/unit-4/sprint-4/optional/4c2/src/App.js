import "./App.css";
import Form from "./Components/Form/Form";
function App() {

  // TODO: Remove below const and instead import them from chakra
  const Button = () => <div />;

  return <div className="App">
      {/* <Button width = "150px"className = "toggleForm" >
        Toggle Form  
      </Button> */}
<Form></Form>
  </div>;
}

export default App;
