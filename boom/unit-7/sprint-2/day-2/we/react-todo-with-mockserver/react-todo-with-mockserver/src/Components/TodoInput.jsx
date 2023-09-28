import React from 'react'
const TodoInput = ({ AddTodo }) => {
    const [text, setText] = React.useState('')
    const handleSubmit = () => {
        AddTodo({
            title: text,
            status: false
        })
    }
    return (
        <div>
            <input type="text" data-testid="todo-input" onChange={(e) => setText(e.target.value)} />

            <button onClick={handleSubmit} data-testid="add-button">Add Todo</button>
        </div>
    )
}
export default TodoInput