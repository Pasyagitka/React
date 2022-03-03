import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TodoItem.css'


const propTypes = {
    value: PropTypes.string,
};

class TodoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                <p>{this.props.value}</p>
                <div className="delete-button-container">
                    <button
                        type="submit"
                        className="delete-button"
                        onClick={() => this.props.onClick()}
                    />
                </div>
            </div>
        );
    }
}

TodoItem.propTypes = propTypes;

export default TodoItem;
