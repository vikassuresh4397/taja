// DO NOT CHANGE THE DATA HERE

import { useState } from "react";
import "./App.css";
import Lists from "./Components/Lists";

export const todos = [
  { id: 1, title: "Learn React", status: false },
  { id: 2, title: "Learn State Management", status: false },
  { id: 3, title: "Learn data fetching", status: false },
];

function App() {
  const [showList, setShowList] = useState(false);

  const handleToggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="App">
      <div>
        <img
          data-testid="image-tag"
          src="https://images.unsplash.com/photo-1615826932727-ed9f182ac67e?ixlib=rb 4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80"
          alt="todo-cover"
          style={{ width: '20px' }}
        />
      </div>
      <div>
        <button data-testid="show-list-button" onClick={handleToggleList}>
          Show List
        </button>
      </div>
      {showList && <Lists todos={todos} />}
    </div>
  );
}

export default App;
