import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
import { v4 as uuidv4 } from 'uuid'
import { EditTodoForm } from './EditTodoForm'
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    const addTodo = todo => {   //addTodo is a function that takes a single parameter called todo. This parameter represents the task you want to add to the list of todos
        setTodos([...todos, {   //to update the todos list. [...todos] takes all the existing todos and spreads them into a new array.
            id: uuidv4(),
            task: todo,         //ask property is set to the value of the todo
            completed: false,   //the new task is not completed yet.
            isEditing: false   //the new task is not being edited.
        }])
        console.log(todos)     //After adding the new todo, it logs the updated todos array to the console.
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed: !todo.completed
        } : todo))
    }
    // remove task
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, isEditing: !todo.isEditing
        } : todo))
    }
    // if the id of a given todo matches the provided id. If it does, it updates the task 
    const editTask = (task, id) => {
        setTodos (todos.map (todo => todo.id === id ? {
            ...todo, task, isEditing: !todo.isEditing} : todo  //!todo.isEditing = reverse the value 
        ))
    }
    return (

        <div className='TodoWrapper'>
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task = {todo} />
                ) : (
                    < Todo
                        task={todo}
                        key={index}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )))}

        </div>



    )
}




