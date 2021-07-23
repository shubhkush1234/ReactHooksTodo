import React from 'react';
import TodosContext from '../context';
import { useContext } from 'react';

const TodoList = () => {
    const { state } = useContext(TodosContext);
    return(
        <div className="container mx-auto max-w-md text-center font-mono" >
            {state.todos.map(todo => 
                <li key={todo.id}>
                    <span>{todo.text}</span>
                </li>)}
        </div>
    )
}

export default TodoList;