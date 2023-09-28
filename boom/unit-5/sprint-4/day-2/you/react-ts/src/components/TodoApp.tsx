import React, { useEffect, useState } from 'react'
import { TodoInput } from './TodoInput'
import { Todo } from '../constants';
import { getTodo } from '../api';
import { TodoItem } from './TodoItem';

export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
// console.log("todos",todos);
  useEffect(() => {
    getTodo().then((res) => {
      console.log(res) // wrap the res value in an array
    })
  }, [])

  return (
    <div>
      <TodoInput />
      {/* {todos.map((el) => {
        return <TodoItem key={el.id} {...el} />
      })} */}
    </div>
  )
}
