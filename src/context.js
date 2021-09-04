import React from 'react';

const TodosContext = React.createContext({
    todos: [
        // {id:1, text: "eat breakfast", completed: true},
        // {id:5, text: "eat dinner", completed: false},
        // {id:6, text: "run 5km", completed: true},
        // {id:0, text: "eat brunch", completed: false},
    ],
    currentTodo: {}
});

export default TodosContext;