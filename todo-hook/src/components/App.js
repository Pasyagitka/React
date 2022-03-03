import React, {
    useEffect
} from 'react';
import Board from './Board';
import '../styles/App.css';

function App() {
    
    useEffect(() => {
        document.title = 'TODO HOOKS';  
    }, []);

    return (
        <div className="app-container">
            <Board />
        </div>
    );
}

export default App;
