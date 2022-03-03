import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import '../styles/TodoList.css'
import {nanoid} from 'nanoid';

const propTypes = {
    todoItems: PropTypes.arrayOf(PropTypes.string),
};

class TodoList extends React.Component {
    render() {
        const listItems = this.props.todoItems.map((number, index) => (
            <TodoItem
                key={nanoid()}
                value={number}
                onClick={() => this.props.onClick(index)}
            />
        ));
        return (
            <div className="todo-list">{listItems}</div>
        );
    }
}

TodoList.propTypes = propTypes;

export default TodoList;