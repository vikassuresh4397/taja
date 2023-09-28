import React, { useState } from "react";

interface Todo {
  title: string;
  description: string;
  status: boolean;
}

interface Props {
  addTodo: (todo: Todo) => void;
}

const Add: React.FC<Props> = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title && description) {
      const newTodo: Todo = {
        title,
        description,
        status: false,
      };
      addTodo(newTodo);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form">
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
