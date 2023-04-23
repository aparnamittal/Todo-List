import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); //to prevent relode when we click on submit

        if (value) {
            // add todo
            addTodo(value);
            // clear form after submission
            setValue("");
        }
    };

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value} placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Add task</button>
        </form>
    )
}

export default TodoForm
