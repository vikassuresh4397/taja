import React, { useState, useEffect } from "react";
import Code from "./Components/Code";
import Add from "./Components/Add";
import Todos from "./Components/Todos";

interface TodoProps {
  title: string;
  description: string;
  status: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo: TodoProps) => {
    setTodos([...todos, newTodo]);
  };

  const toggleStatus = (index: number) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, status: !todo.status } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <Code />
      <Add onAdd={addTodo} />
      <Todos todos={todos} onToggle={toggleStatus} />
    </div>
  );
}

export default App;
