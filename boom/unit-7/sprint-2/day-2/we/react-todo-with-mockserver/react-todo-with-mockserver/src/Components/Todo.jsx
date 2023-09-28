import TodoInput from "./TodoInput";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Todos = () => {
  const [data, setData] = useState([]);

  const fetchTodo = async () => {
    const res = await axios.get(`https://tododata-7ing.onrender.com/todos`);
    setData(res.data);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const AddTodo = async (TodoObj) => {
    await axios.post(`https://tododata-7ing.onrender.com/todos`, TodoObj);
    window.location.reload();
  };

  const handleEdit = async (id, newTitle) => {
    try {
      await axios.put(`https://tododata-7ing.onrender.com/todos/${id}`, {
        title: newTitle,
      });
      fetchTodo();
    } catch (error) {
      console.log("Error updating todo:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://tododata-7ing.onrender.com/todos/${id}`);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Error deleting todo:", error);
    }
  };

  const handleCheckboxChange = (id) => {
    console.log(`Checkbox changed for ID: ${id}`);
  };

  return (
    <div>
      <TodoInput AddTodo={AddTodo} />

      {data?.map((e) => (
        <div
          data-testid="todos-wrapper"
          key={e.id}
          style={{
            border: "1px solid black",
            marginBottom: "10px",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(e.id)}
              style={{ marginRight: "10px" }}
            />
            {e.editing ? (
              <input
                type="text"
                value={e.title}
                onChange={(event) =>
                  setData((prevData) =>
                    prevData.map((item) =>
                      item.id === e.id ? { ...item, title: event.target.value } : item
                    )
                  )
                }
                onBlur={() => handleEdit(e.id, e.title)}
              />
            ) : (
              <p style={{ marginLeft: "10px" }}>
                {e.title} - {e.status ? "True" : "False"}
              </p>
            )}
          </div>
          <div>
            <button
              onClick={() =>
                setData((prevData) =>
                  prevData.map((item) =>
                    item.id === e.id ? { ...item, editing: true } : item
                  )
                )
              }
              disabled={e.editing}
            >
              Edit
            </button>
            <button onClick={() => handleDelete(e.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todos;
