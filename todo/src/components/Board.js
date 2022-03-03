import React from 'react';
import '../styles/Board.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [
                'Buy milk', 
                'Buy orange', 
                'Buy car'
            ],
            newItem: ''
        }
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        let newItems = this.state.todoItems.concat(this.state.newItem);
        this.setState({ 
            todoItems: newItems, 
            newItem: ''
        });
    }

    handleDelete(id) {
        let newItems = [...this.state.todoItems];
        newItems.splice(id, 1);
        this.setState({
            todoItems: newItems
        });
    }

    handleInput(event) {
        this.setState({
            newItem: event.target.value
        });
    }

    render() {
        return (
            <div className="board-container">
                <h1>Todo App</h1>
                <AddTodo
                    newItem={this.state.newItem}
                    onClick={this.handleAdd}
                    onChange={(e) => this.handleInput(e)}
                />
                <TodoList
                    todoItems={this.state.todoItems}
                    onClick={(i) => this.handleDelete(i)}
                />
                <p>There is {this.state.todoItems.length} pending tasks</p>
            </div>
        );
    }
}

export default Board;
