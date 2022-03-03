import React, { 
    useState 
} from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import '../styles/Board.css';


function Board() {
    const [todoItems, setTodoItems] = useState([
        'Buy milk', 
        'Buy orange', 
        'Buy car'
    ]);
    const [newItem, setNewItem] = useState('');

    function handleAdd() {
        let newItems = todoItems.concat(newItem);
        setTodoItems(newItems);
        setNewItem('');
    };
    
    function handleDelete(id) {
        let newItems = [...todoItems];
        newItems.splice(id, 1);
        setTodoItems(newItems);
    }
    
    function handleInput(event) {
        setNewItem(event.target.value);
    }

    return (
        <div className="board-container">
            <h1>Todo App</h1>
            <AddTodo
                newItem={newItem}
                onClick={() => handleAdd()}
                onChange={(e) => handleInput(e)}
            />
            <TodoList
                todoItems={todoItems}
                onClick={(i) => handleDelete(i)}
            />
            <p>There is {todoItems.length} pending tasks</p>
        </div>
    );
}

export default Board;
