import { combineReducers } from 'redux';
import todosReducer from './todoSlice';

const rootReducer = combineReducers({
    todoItems: todosReducer,
});  

export default rootReducer;
