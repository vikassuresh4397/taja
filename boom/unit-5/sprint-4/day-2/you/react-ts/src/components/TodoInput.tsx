import { log } from 'console';
import React, { useState } from 'react'
import { addTodo } from '../api';

export const TodoInput = () => {
    const [title,setTitle] = useState<string>("");
    
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
     setTitle(e.target.value);
    }

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    // console.log(title);
    const newTodo={
      title,
      status:false,
    }
    addTodo(newTodo)
    setTitle("");
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' 
            placeholder='title' 
            value={title}
            onChange={handleChange} ></input>
            <button type="submit">Add Todo</button>
        </form>
    </div>
  )
}