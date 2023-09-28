// Todo.jsx
import React, { useState } from 'react';
import TodoList from './TodoList';

const Todo = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { title, completed: false }]);
    setTitle('');
  };

  const toggleTask = (index) => {
    setTodos(
      todos.map((todo, i) => {
        if (i === index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        <button type="submit">ADD</button>
      </form>
      <TodoList todos={todos} toggleTask={toggleTask} />
    </div>
  );
};

export default Todo;

// TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTask }) => (
  <ul>
    {todos.map((todo, index) => (
      <TodoItem key={index} todo={todo} toggleTask={() => toggleTask(index)} />
    ))}
  </ul>
);

export default TodoList;

// TodoItem.jsx
import React from 'react';

const TodoItem = ({ todo, toggleTask }) => (
  <li onClick={toggleTask} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
    {todo.title}
  </li>
);

export default TodoItem;
