export default function reducer (state, action){
    switch(action.type){
        case "TOGGLE_TODO":
            const toggledTodos = state.todos.map(t => t.id === action.payload.id ? 
                { ...action.payload, complete: !action.payload.complete}
                : t)

            return {...state, todos:toggledTodos}
        
        case "REMOVE_TODO":
                const filteredTodo = state.todos.filter( t => t.id !== action.payload.id)
            return {...state, todos: filteredTodo}
        default:
            return state;
    }
}