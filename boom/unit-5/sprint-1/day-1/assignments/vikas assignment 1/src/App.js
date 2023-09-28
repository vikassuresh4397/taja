import "./App.css";
import Counter from "./components/Counter";
// fdndn
function App() {
  return (
    <div className="App">
      <div data-testid="counter">
        <Counter></Counter>
      </div>
    </div>
  );
}

export default App;
