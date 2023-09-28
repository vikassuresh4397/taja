import TodoInput from "./TodoInput";
import {store} from "../redux/store";
import {useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getTodoFailure, getTodoRequest, getTodoSuccess } from "../redux/action";
const Todos = () => {
  const todos=useSelector(store=>store.todos);
  const isLoading = useSelector(store=>store.isLoading);

  const dispatch = useDispatch();

  // console.log("todos",todos)

const getTodos=()=>{
  dispatch(getTodoRequest());
  axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
  .then((res)=>{
    console.log(res.data)
    dispatch(getTodoSuccess(res.data))
  })
  .catch((err)=>{
    dispatch(getTodoFailure());
  })
}

useEffect(()=>{
  getTodos()
},[])


  return (
    <div data-testid = "todos-wrapper">
    {/* add TodoInput component here */}
    <TodoInput></TodoInput>
    {/* map through the todos array and display the tasks */}
    {
        isLoading && <h1>...loading</h1>
     }

   {
        todos.length>0 && todos.map((el)=>{
            return (<div key={el.id}>
                {el.title}--{el.status?"true":"false"}

            </div>)
        })
    }
    </div>
  );
};

export default Todos;
