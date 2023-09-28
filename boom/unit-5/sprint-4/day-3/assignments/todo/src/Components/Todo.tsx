import React from "react";

interface Todo {
  title: string;
  description: string;
  status: boolean;
}

interface Props {
  todo: Todo;
  handleStatusChange: (title: string) => void;
}

const Todo: React.FC<Props> = ({ todo, handleStatusChange }) => {
  return (
    <div data-testid="todo-container">
      <h2 data-testid="todo-title">{todo.title}</h2>
      <p data-testid="todo-desc">{todo.description}</p>
      <input
        data-testid="todo-status"
        type="checkbox"
        checked={todo.status}
        onChange={() => handleStatusChange(todo.title)}
      />
    </div>
  );
};

export default Todo;
