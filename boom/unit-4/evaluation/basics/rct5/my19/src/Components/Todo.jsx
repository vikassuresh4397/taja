import React from "react"



export default function Todo(){

    const [text,setText]= React.useState("");
    const wow = (e)=>{
       
        setText(e.target.value);
    }
const [todo,setTodo]=React.useState([]);

    const handleClick=()=>{
       const newItem= {
             name:text,
             status:false,
             id:Date.now()+text+Math.random()
        }
     const newTodo= [...todo,newItem];
     setTodo(newTodo);
     console.log(newTodo)
      
    }
    // console.log(todo)

    return(<>
    <div>
    <input placeholder="Add Todo" value={text} onChange={wow}></input>
        <button onClick={handleClick}>Add</button> 
    </div>
       <div>
        {todo.map((e)=>(<li key={e.id}>{e.name}-{e.status?"Not completed":"Completed"}</li>))}
       </div>
    </>)
}