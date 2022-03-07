import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

const propTypes = {
    todoItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick: PropTypes.func.isRequired,
};

function TodoList({todoItems, onClick}) {
    const listItems = todoItems.map((todo) =>(
        <TodoItem
                key={todo.id}
                value={todo.text}
                onClick={() => onClick(todo.id)}
        />
    ));
    return (
        <div className="todo-list">{listItems}</div>
    );
}

TodoList.propTypes = propTypes;

export default TodoList;
