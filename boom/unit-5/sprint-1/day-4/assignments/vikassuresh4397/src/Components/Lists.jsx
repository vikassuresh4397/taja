import React from 'react'

const Lists = ({todos}) => {
  return (
    <div data-testid="list-component" style={{ width: 'fit-content', margin: 'auto', textAlign: 'left'}}>
        <ul>
          {
            todos.map((todo)=>{
              return (<li key={todo.id}>{todo.title}</li>)
            })
          }
        </ul>
    </div>
  )
}

export default Lists
