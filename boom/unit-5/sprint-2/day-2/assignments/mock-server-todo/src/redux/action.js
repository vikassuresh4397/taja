import { GET_TODO_FAILURE, GET_TODO_REQUEST, GET_TODO_SUCCESS, POST_TODO_FAILURE, POST_TODO_REQUEST, POST_TODO_SUCCESS } from "./actionType"

export const getTodoRequest = () =>{
    return {type:GET_TODO_REQUEST}
}

export const getTodoSuccess=(payload)=>{
    return {type:GET_TODO_SUCCESS,payload}
}

export const getTodoFailure =()=>{
    return{type:GET_TODO_FAILURE}
}

export const postTodoRequest = () =>{
    return {type:POST_TODO_REQUEST}
}

export const postTodoSuccess=(payload)=>{
    return {type:POST_TODO_SUCCESS,payload}
}

export const postTodoFailure =()=>{
    return{type:POST_TODO_FAILURE}
}

