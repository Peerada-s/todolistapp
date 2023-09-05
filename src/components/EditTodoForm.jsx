import React, { useState } from 'react'



export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = e => {
        // to prevent re-loading page when you submit the form
        e.preventDefault();

        editTodo(value, task.id)
        // After we submit the form, we claer it
        setValue("")
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)} />
            <button type='sunmit' className='todo-btn'>Update Task</button>
        </form>
    )
}



