import axios, { AxiosResponse } from "axios"

import { Todo } from "./constants";

export const addTodo = async (newTodo:Todo)=>{
let res:AxiosResponse<Todo> = await axios.post(`http://localhost:8080/todos`,newTodo);

console.log(res);

}

export const getTodo=async()=>{
    let res : AxiosResponse<Todo> = await axios.get(`http://localhost:8080/posts`);
    // console.log(res.data)
    
    return res.data
    }