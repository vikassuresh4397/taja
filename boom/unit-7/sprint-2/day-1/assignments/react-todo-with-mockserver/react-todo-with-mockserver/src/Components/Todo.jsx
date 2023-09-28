import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
} from "../Redux/todoReducer/action";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  const {todos} = useSelector((state) => state.todos);
  // console.log(todos);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTodos);
  }, []);

  const handleAddTodo = (title) => {
    dispatch(
      addTodo({
        title,
        status: false,
      })
    );
  };

  const handleUpdateTodo = (id, updatedTitle) => {
    dispatch(updateTodo(id, updatedTitle));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <TodoInput addTodo={handleAddTodo} />

      <TodoList
        todos={todos}
        updateTodo={handleUpdateTodo}
        deleteTodo={handleDeleteTodo}
        toggleTodo={handleToggleTodo}
      />
    </div>
  );
};

export default Todo;
