import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import '../styles/TodoList.css';


const propTypes = {
    todoItems: PropTypes.arrayOf(PropTypes.object),
};

function TodoList(props) {
    const listItems = props.todoItems.map((todo) =>(
        <TodoItem
                key={todo.id}
                value={todo.text}
                onClick={() => props.onClick(todo.id)}
        />
    ));
    return (
        <div className="todo-list">{listItems}</div>
    );
}

TodoList.propTypes = propTypes;

export default TodoList;