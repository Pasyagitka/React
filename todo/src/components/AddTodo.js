import React from 'react';
import PropTypes from 'prop-types';
import '../styles/AddTodo.css';

const propTypes = {
    newItem: PropTypes.string,
};

class AddTodo extends React.Component {
    render() {
        return (
            <div className="add-todo-container">
                <p>New todo</p>
                <div className="add-input-container">
                    <input
                        type="text"
                        placeholder="Add new todo here"
                        className="add-input"
                        value={this.props.newItem}
                        onChange={(e) => this.props.onChange(e)}
                    />
                    <div className="add-button-container">
                        <button
                            type="submit"
                            className="add-button"
                            onClick={this.props.onClick}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

AddTodo.propTypes = propTypes;

export default AddTodo;
