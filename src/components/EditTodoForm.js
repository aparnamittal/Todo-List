import React, { useState } from 'react'

const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task)//we used (task.task) so that we can keep the already entered value 

    const handleSubmit = (e) => {
        e.preventDefault(); //to prevent relode when we click on submit
        //edit todo
        editTodo(value, task.id);

    };

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' className='todo-input' value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)} />
            <button type='submit' className='todo-btn'>Update</button>
        </form>
    )
}

export default EditTodoForm
