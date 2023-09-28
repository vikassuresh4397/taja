import React from "react";
import Todo from "./Todo";

const Todos = () => {
// get todos from local storage or set an empty array if not exist
const todos = JSON.parse(localStorage.getItem("todos") || "[]");

return (
<div>
{todos.map((todo: any, index: number) => (
<Todo key={index} todo={todo} />
))}
</div>
);
};

export default Todos;