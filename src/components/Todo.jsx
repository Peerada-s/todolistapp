// to display todo that we just added
import React from 'react'
import { BiEdit } from "react-icons/bi";
import { IoTrashBinOutline } from "react-icons/io5";

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
    const handleTodoClick =() => {
      toggleComplete(task.id)
    }
  const todoClassName = task.completed ? "completed": '';
  return (
    <div className='Todo'>
      <p
        onClick={handleTodoClick}
        className={todoClassName}>
        {task.task}
      </p>
      <div>
        {/* when click edit, it will update. */}
        <BiEdit onClick={() => editTodo(task.id)}/>
        <IoTrashBinOutline  onClick={() => deleteTodo(task.id)}  />
      </div>
    </div >
  )
}


