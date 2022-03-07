import {
    ADD_TODO,
    DELETE_TODO,
} from '../constants/actionTypes';

const initialState = [
    {id: 1, text: 'Buy milk'},
    {id: 2, text: 'Buy orange'},
    {id: 3, text: 'Buy car'},
];

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}
  
function appReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload,
                }
            ];
        }
        case DELETE_TODO : {
            return state.filter((x) => x.id !== action.payload);
        }
        default:
        return state;
    }
}

export default appReducer;
