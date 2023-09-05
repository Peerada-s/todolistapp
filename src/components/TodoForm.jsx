import React, { useState } from 'react'



export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        // to prevent re-loading page when you submit the form
        e.preventDefault();

        addTodo(value)
        // After we submit the form, we claer it
        setValue("")
    }
    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value} placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)} />
            <button type='sunmit' className='todo-btn'>Add Task</button>
        </form>
    )
}


