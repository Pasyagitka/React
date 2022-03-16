import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import '../styles/Board.css';


function Board({todoItems, actions}) {
    const [newItem, setNewItem] = useState('');

    function handleAdd() {
        if(newItem !== '') {
            actions.addTodo(newItem); 
            setNewItem('');
        }
    }

    return (
        <div className="board-container">
            <h1>Todo App</h1>
            <AddTodo
                newItem={newItem}
                onClick={() => handleAdd()}
                onChange={(event) => {setNewItem(event.target.value);}}
            />
            <TodoList
                todoItems={todoItems}
                onClick={(id) => actions.deleteTodo(id)}
            />
            <p>There is {todoItems.length} pending tasks</p>
        </div>
    );
}

export default Board;
