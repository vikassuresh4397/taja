import React from "react";
import Addtodo from "./Addtodo";
import TodoItem from "./TodoItem";



export default function Todo(){
  
    const [todo,setTodo]=React.useState([]);
    // function Toggle(id){
    //     const newArraftertoggle= todo.map((todos)=>todos.id===id?{...todos,status:!todos}:todos);
    //     setTodo(newArraftertoggle)
    //     }
        

function boom(text){
   const newItem={
    name:text,
    status:false,
    id:Date.now()+text+Math.random(),
   };

let newItemsarray=[...todo,newItem];

setTodo(newItemsarray);


 
}
const handletoggle=(id)=>{
    const newArraftertoggle=todo.map((e)=>e.id==id?{...e,status:!e.status}:e);
    setTodo(newArraftertoggle);
    }

    const handledelete=(id)=>{
        const newArrafterdelete=todo.filter((e)=>e.id!==id);
        setTodo(newArrafterdelete);
    }

    return (<>
    <div>
    <>
    <Addtodo handlechange={boom}></Addtodo>
    </>
    </div>

    <div>
    <>
    {todo.map((e)=>(<TodoItem name={e.name} status={e.status} id={e.id} handletoggle={handletoggle} handledelete={handledelete}></TodoItem>))}
   
    </>
    </div>
           </>)
}

