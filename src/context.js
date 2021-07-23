import React from 'react';

const TodosContext = React.createContext({
    todos: [
        {id:1, text: "eat breakfast", completed: true},
        {id:2, text: "eat breakfast", completed: true},
        {id:3, text: "eat lunch", completed: false},
        {id:4, text: "eat breakfast", completed: true},
        {id:5, text: "eat dinner", completed: false},
        {id:6, text: "eat breakfast", completed: true},
        {id:7, text: "eat brunch", completed: false},
    ]
});

export default TodosContext;