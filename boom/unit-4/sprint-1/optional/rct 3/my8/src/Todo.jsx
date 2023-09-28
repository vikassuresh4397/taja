import React, { useState } from 'react';

const Todo = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, text]);
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
        <button type="submit">ADD</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
