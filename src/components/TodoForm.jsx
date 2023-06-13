import React from 'react'
import { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {

    setValue(e.target.value);

  }

  const handleSubmit = (e) => {
     e.preventDefault();
     addTodo(value);
     setValue("");
  }

  return (
    <form className = 'TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' value = {value} placeholder='Hey!What are we doing today?' onChange = {handleChange}/>
      <button type = "submit" className='to-do-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
