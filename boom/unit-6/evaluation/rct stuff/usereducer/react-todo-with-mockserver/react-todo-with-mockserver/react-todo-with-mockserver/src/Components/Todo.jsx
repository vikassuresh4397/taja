import TodoInput from "./TodoInput";
import React from "react";
import axios from "axios";
const Todos = () => {
  const [data, setData] = React.useState([]);
  const fetchTodo = async () => {
    const res = await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`);
    setData(res.data);
  }
  React.useEffect(() => {
    fetchTodo();
  }, [data])
  const AddTodo = (TodoObj) => {
    return axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`, TodoObj)
  }
  return (
    <div>
      {/* add TodoInput component here */}
      <TodoInput AddTodo={AddTodo} />
      {/* map through the todos array and display the tasks */}
      {
        data?.map((e) => {
          return (
            <div data-testid="todos-wrapper" key={e.id}>
              <p>{e.title} - {e.status ? 'True' : 'False'}</p>
            </div>
          )
        })
      }
    </div>
  );
};
export default Todos;
