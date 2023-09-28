import React, { useState } from "react";

interface TodoProps {
  title: string;
  description: string;
  status: boolean;
}

const Todo = ({ title, description, status }: TodoProps) => {
  const [completed, setCompleted] = useState(status);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompleted(e.target.checked);

    // update status in local storage
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const updatedTodos = todos.map((todo: TodoProps) => {
      if (todo.title === title && todo.description === description) {
        return {
          ...todo,
          status: e.target.checked,
        };
      } else {
        return todo;
      }
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div data-testid="todo-container">
      <h2 data-testid="todo-title">{title}</h2>
      <p data-testid="todo-desc">{description}</p>
      <input
        data-testid="todo-status"
        type="checkbox"
        checked={completed}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default Todo;
