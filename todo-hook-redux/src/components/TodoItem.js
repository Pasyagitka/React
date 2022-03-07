import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TodoItem.css'

const propTypes = {
    value: PropTypes.string,
};

function TodoItem(props) {
    return (
        <div className="todo-item">
            <p>{props.value}</p>
            <div className="delete-button-container">
                <button
                    type="submit"
                    className="delete-button"
                    onClick={() => props.onClick()}
                />
            </div>
        </div>
    );
}

TodoItem.propTypes = propTypes;

export default TodoItem;
