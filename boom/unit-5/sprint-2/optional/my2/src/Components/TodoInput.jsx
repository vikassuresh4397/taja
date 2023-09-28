import React, { useState } from "react"

export const TodoInput=({addTodo})=>{
    const [input,setInput] = useState("");

    const handleAddTodo =()=>{
        addTodo(input);
        console.log(input);
        setInput("");
    }
    return(
    <div>

     <input value={input} placeholder="Add text" onChange={(e)=>setInput(e.target.value)}/>

<button onClick={handleAddTodo}>ADD mE</button>


    </div>
      

    )
}