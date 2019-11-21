import React from 'react';
import Navbar from '../Nav';
import Todolist from './todoList';
import TodoForm from './todoForm';

function All() {
    return (
        <div className="App">
            <Navbar/>
            <Todolist/>
            <TodoForm/>
        </div>
    );
}

export default All;
