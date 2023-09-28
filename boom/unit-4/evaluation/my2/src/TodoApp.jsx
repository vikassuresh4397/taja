import React, { useState, useEffect } from 'react';

const TodoApp = () => {
const [todos, setTodos] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 5;

useEffect(() => {
setLoading(true);
setError(null);
// MOCK SERVER CALL
setTimeout(() => {
setLoading(false);
setTodos([
{ id: 1, task: 'Buy groceries' },
{ id: 2, task: 'Do laundry' },
{ id: 3, task: 'Take out the trash' },
{ id: 4, task: 'Walk the dog' },
{ id: 5, task: 'Clean the house' },
{ id: 6, task: 'Call mom' },
{ id: 7, task: 'Work on project' },
{ id: 8, task: 'Exercise' },
{ id: 9, task: 'Study for exam' },
{ id: 10, task: 'Take a nap' },
]);
}, 1000);
}, []);

if (loading) {
return <p>Loading...</p>;
}

if (error) {
return <p>Error: {error}</p>;
}

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentTodos = todos.slice(indexOfFirstItem, indexOfLastItem);

const renderTodos = currentTodos.map((todo) => {
return <li key={todo.id}>{todo.task}</li>;
});

const pageNumbers = [];
for (let i = 1; i <= Math.ceil(todos.length / itemsPerPage); i++) {
pageNumbers.push(i);
}

const renderPageNumbers = pageNumbers.map((number) => {
return (
<button
key={number}
onClick={() => setCurrentPage(number)}
className={currentPage === number ? 'active' : ''}
>
{number}
</button>
);
});

return (
<div>
<h1>Todo List</h1>
<ul>{renderTodos}</ul>
<div className="pagination">{renderPageNumbers}</div>
</div>
);
};

export default TodoApp;