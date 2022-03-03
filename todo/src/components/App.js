import React from 'react';
import Board from './Board';
import '../styles/App.css';

class App extends React.Component {
    
    componentDidMount() {
        document.title = 'TODO'; 
    }

    render() {
        return (
            <div className="app-container">
                <Board />
            </div>
        );
    }
}

export default App;
