import { TodoInput } from "./TodoInput"
import React, { useEffect } from "react"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"; 
import { postFailureAction, postRequestAction, postSuccessAction, todoFailureAction, todoRequestAction, todoSuccessAction } from "../redux/action";


export const Todo=()=>{
 const dispatch =useDispatch();

 const todo=useSelector((state)=>{
    // console.log("state",state.todo);
    return (state.todo);
})
    const getData=()=>{
        dispatch(todoRequestAction())
        axios.get(`http://localhost:8080/todo`)
        .then((res)=>{
            dispatch(todoSuccessAction(res.data))
            // console.log(res.data);
        }).catch((err)=>{
             dispatch(todoFailureAction())
            console.log(err);
        })
    }
    useEffect(()=>{
        getData();
    },[])

    const handleAddTodo =(input)=>{
        dispatch(postRequestAction())
        axios.post(`http://localhost:8080/todo`)
        .then(res=>{
            dispatch(postSuccessAction())
            console.log(res);
        }).catch((err)=>{
            dispatch(postFailureAction())
           console.log(err);
       })
    }
    return(<>
      <TodoInput addTodo={handleAddTodo}></TodoInput>
      {
        todo.length>0&& todo.map((el)=>{
            return (<div key={el.id}>{el.status ? "Completed":"Pending"} -- {el.title}</div>)
        })
      }
    </>)
}


// http://localhost:8080/todo