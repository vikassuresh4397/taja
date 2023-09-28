import * as actionTypes from "./actionTypes";

export const fetchTodos = async (dispatch) => {
  try {
    await fetch("http://localhost:8080/todos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: actionTypes.FETCH_TODOS, payload: data });
      });
  } catch (error) {
    console.log(error?.message);
  }
};

export const addTodo = (todo) => async (dispatch) => {
  console.log(todo);
  try {
    await fetch("http://localhost:8080/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: actionTypes.ADD_TODO, payload: data });
      });
  } catch (error) {
    console.log(error?.message);
  }
};

export const updateTodo = (id, updatedTitle) => {
  return {
    type: actionTypes.UPDATE_TODO,
    payload: {
      id,
      title: updatedTitle,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: actionTypes.DELETE_TODO,
    payload: id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: actionTypes.TOGGLE_TODO,
    payload: id,
  };
};
