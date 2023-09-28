import React, { useState } from "react";

const Add = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // create new todo object
    const newTodo = {
      title,
      description,
      status: false,
    };

    // get current todos from local storage or set an empty array if not exist
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");

    // add new todo object to todos array
    todos.push(newTodo);

    // store updated todos array in local storage
    localStorage.setItem("todos", JSON.stringify(todos));

    // reset form inputs
    setTitle("");
    setDescription("");
  };

  return (
    <form data-testid="form" onSubmit={handleSubmit}>
      <input
        data-testid="title"
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        data-testid="description"
        id="description"
        cols={30}
        rows={10}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <input type="submit" value="Create Todo" />
    </form>
  );
};

export default Add;
