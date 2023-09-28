import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";
import React from "react";
function App() {
  var [isFiction,setState]=React.useState(true);
  function toggleBtn(){
    setState(!isFiction);
  }
  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={toggleBtn}>{!isFiction? "Show Fictional Books" : "Show Non-Fiction Books"}</button>
      <div data-testid="conditional-container">
        {
          isFiction? <Fiction/> : <NonFiction/>
        }
      </div>
    </div>
  );
}

export default App;
