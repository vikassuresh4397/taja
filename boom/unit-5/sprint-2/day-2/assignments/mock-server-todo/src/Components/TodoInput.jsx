import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { postTodoFailure, postTodoRequest, postTodoSuccess } from '../redux/action';

const TodoInput = () => {
const [title,setTitle]=useState("");
console.log(title);
const dispatch = useDispatch();
const postTodos = ()=>{

dispatch(postTodoRequest());

const newObj={
  title,
  status:false,
}
axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,newObj)
.then((res)=>{
  dispatch(postTodoSuccess(res.data))
})
.catch((err)=>{
  dispatch(postTodoFailure());
})

setTitle("");

}
 


  return (
    <div>
      <input data-testid = "todo-input" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
      <button data-testid ="add-button" onClick={postTodos}>Add Todo</button>
    </div>
  )
}

export default TodoInput