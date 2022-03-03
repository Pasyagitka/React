import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import '../styles/TodoList.css'

const propTypes = {
    todoItems: PropTypes.arrayOf(PropTypes.string),
};

function TodoList(props) {
    const listItems = props.todoItems.map((number, index) => (
        <TodoItem
                key={nanoid()}
                value={number}
                onClick={() => props.onClick(index)}
        />
    ));
    return (
        <div className="todo-list">{listItems}</div>
    );
}

TodoList.propTypes = propTypes;

export default TodoList;