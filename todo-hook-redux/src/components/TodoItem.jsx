import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TodoItem.css';

const propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

function TodoItem({value, onClick}) {
    return (
        <div className="todo-item">
            <p>{value}</p>
            <div className="delete-button-container">
                <button
                    type="submit"
                    className="delete-button"
                    onClick={() => onClick()}
                />
            </div>
        </div>
    );
}

TodoItem.propTypes = propTypes;

export default TodoItem;
