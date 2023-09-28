
import {useState } from "react"


export const TodoInput=({addTodo})=>{
    const [input,setInput]=useState("")

    const handleAdd=()=>{
        const newobj={
            title:input,
            status:false
        }
        addTodo(newobj)
    }

    return(
        <>
            <input data-testid = "todo-input" type="text" placeholder="Add Todo" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button data-testid ="add-button" onClick={handleAdd}>Add</button>
        </>
    )
}