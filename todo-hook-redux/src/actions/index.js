import { 
    ADD_TODO, 
    DELETE_TODO 
} from '../constants/actionTypes';

export const addTodo = (newItem) => (
    { type: ADD_TODO, payload: newItem }
);

export const deleteTodo = (id) => (
    { type: DELETE_TODO, payload: id }
);
