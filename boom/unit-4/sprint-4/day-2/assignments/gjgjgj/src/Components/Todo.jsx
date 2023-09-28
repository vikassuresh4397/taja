import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";
const Todos = () => {
const [todos,setTodos]=useState([]);

const wow = () =>{
  axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
.then((res)=>setTodos(res.data));
console.log(todos);
}





  const onboo= (popo)=>{
 
   axios({
    method:"post",
    url:`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,
    data:popo,
   }
    
   ).then(()=>wow())
    
  }

  useEffect(()=>{
    wow()
    },[])

  return (
    <div>
    {/* add TodoInput component here */}
    <TodoInput onboom={onboo}> </TodoInput>
    {/* map through the todos array and display the tasks */}
    {
      todos.map((el)=>(<div key={el.id}>
        <span><h3>{el.title}</h3></span>
        <span><h3>{el.status?"True":"False"}</h3></span>
      </div>))
    }
    </div>
  );
};

export default Todos;
