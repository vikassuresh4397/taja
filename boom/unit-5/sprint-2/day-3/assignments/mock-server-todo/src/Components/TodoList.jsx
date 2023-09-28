import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData, getDataRequest } from "../Redux/action";
import { getDataSuccess } from "../Redux/action";
import { getDataError } from "../Redux/action";

// get all the todos from the redux store, and map them inside this component
const TodoList = () => {
  const todo = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  // console.log(todo);
  useEffect(()=>{
    // getData(dispatch)
    dispatch(getData)
  },[])

  return (
    <div data-testid="todo-list-wrapper">
      {/* map all the "individual/single" todo inside this div. */}
      {
        todo?.map((el)=>(
          <div data-testid="single-todo" key={el.id}>{el.title}--{el.status}</div>
        ))
      }

    </div>
  );
};

export default TodoList;
