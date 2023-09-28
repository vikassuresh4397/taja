import { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import axios from "axios"
const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`


const Todos = () => {
  const [todos, setTodos] = useState([])

  const getTodos = () => {
    axios
      .get(url)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getTodos()
  }, [])

  const handleAdd=(payload)=>{
    axios
      .post(url,payload)
      .then((res)=>{
        console.log(res.data)
      })
      .then(()=>{
        getTodos()
      })
      .catch((err)=>console.log(err))
  }


  return (
    <div>
      {/* add TodoInput component here */}
      <TodoInput addTodo={handleAdd}/>
      {/* map through the todos array and display the tasks */}
      <div data-testid = "todos-wrapper">
        {todos.length > 0 && todos.map((todo) => <div key={todo.id} style={{ display: "flex", justifyContent: "space-around", width: "200px", margin: "auto" }}>
          <p>{todo.title}</p>
          <p>{todo.status ? "True" : "False"}</p>
        </div>)}
      </div>
    </div>
  );
};

export default Todos;
