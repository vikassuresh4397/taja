import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addDataPost,
  postTodoError,
  postTodoRequest,
  postTodoSuccess,
} from "../Redux/action";

//make a POST request (by dispatching the function), to save the data in db.json
//make a GET request (by dispatching the function), if the post request is successful, by chaining them together
const TodoInput = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addDataPost(title))
  };

  return (
    <div>
      <input
        data-testid="todo-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button data-testid="todo-add-btn" onClick={handleAdd}>
        {" "}
        ADD
      </button>
    </div>
  );
};

export default TodoInput;
