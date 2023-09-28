import React from "react";

function AddTodo(props){
    const {handleClick} = props;
    const [text,setText]= React.useState("");
    const wow = (e)=>{
       
        setText(e.target.value);
    }
    return(
        <>
        <input placeholder="Add Todo" value={text} onChange={wow}></input>
        <button onClick={()=>{
            handleClick(text)
            setText("")
            }
        }
            >Addd</button> 
        </>
    )
}

export default function Todo(){

   
const [todo,setTodo]=React.useState([]);

    const handleClick=(text)=>{
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
   <AddTodo handleClick={handleClick}></AddTodo>
   
    </div>
       <div>
       <>
 {todo.map((e)=>(<li key={e.id}>{e.name}-{e.status?"Not completed":"Completed"}</li>))}
      
       </>
       
       </div>
    </>)
}