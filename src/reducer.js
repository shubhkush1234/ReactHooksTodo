import { generateUniqueId } from 'generate-unique-id';

export default function reducer (state, action){
    switch(action.type){
        case "TOGGLE_TODO":
            const toggledTodos = state.todos.map(t => t.id === action.payload.id ? 
                { ...action.payload, complete: !action.payload.complete}
                : t)

            return {...state, todos:toggledTodos}
        
        case "ADD_TODO":
            const newTodo = {
                id: Math.floor(Math.random() * 100) + 1,
                text: action.payload,
                complete: false
            }
            const addedTodos = [...state.todos, newTodo];
            return {
                ...state,
                todos: addedTodos
            }
        case "REMOVE_TODO":
                const filteredTodo = state.todos.filter( t => t.id !== action.payload.id)
            return {...state, todos: filteredTodo}
        case "SET_CURRENT_TODO":
            return {...state, currentTodo: action.payload}

        case "UPDATE_TODO":
            const updatedTodo = {...state.currentTodo, text: action.payload }
            const updatedTodoIndex = state.todos.findIndex(
                t => t.id === state.currentTodo.id
            )

            const updatedTodos = [
                ...state.todos.slice(0, updatedTodoIndex),
                updatedTodo,
                ...state.todos.slice(updatedTodoIndex + 1) 
            ];
            return {
                ...state,
                currentTodo: {},
                todos: updatedTodos
            }
            
        default:
            return state;
    }
}