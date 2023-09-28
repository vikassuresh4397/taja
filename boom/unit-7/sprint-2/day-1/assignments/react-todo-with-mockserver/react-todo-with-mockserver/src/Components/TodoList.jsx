import React from 'react';

const TodoList = ({ todos, updateTodo, deleteTodo, toggleTodo }) => {
  const handleUpdate = (id, updatedTitle) => {
    updateTodo(id, updatedTitle);
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleCheckboxChange = (id) => {
    toggleTodo(id);
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => handleCheckboxChange(todo.id)}
          />
          <input
            type="text"
            value={todo.title}
            onChange={(e) => handleUpdate(todo.id, e.target.value)}
          />
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
