import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = () => {
    const [todos, setTodods] = useState([])

    const addTodo = (todo) => {
        setTodods([...todos, {
            id: uuidv4(), task: todo,
            completed: false, isEditing: false
        },])
    }

    const deleteTodo = (id) => setTodods(todos.filter((todo) => todo.id !== id));

    const toggleComplete = (id) => {
        setTodods(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const editTodo = (id) => {
        setTodods(todos.map((todo) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    }

    const editTask = (task, id) => {
        setTodods(todos.map((todo) => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    };

    return (
        <div className='TodoWrapper'>
            <h1>My Todo List ! </h1>
            <TodoForm addTodo={addTodo} />

            {/* display todos */}

            {todos.map((todo) =>
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (<Todo task={todo} key={todo.id}
                    toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                ))}
        </div>
    );
};

export default TodoWrapper
