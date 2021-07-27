import React from 'react';
import TodosContext from '../context';
import { useContext } from 'react';

const TodoList = () => {
    const { state, dispatch } = useContext(TodosContext);
    const title = state.todos.length > 0 ? `${state.todos.length} Todos` : "Nothing to do!";
    return (
        <div className="container mx-auto max-w-md text-center font-mono" >
            <h1 className="text-bold">
                {title}
            </h1>
            <ul className="list-reset text-white p-0" >
                {state.todos.map(todo =>
                    <li key={todo.id} className="flex items-center bg-red-300 border-black
                        border-dashed border-2 my-2 py-4">
                        <span className={`flex-1 ml-12 curser-pointer ${todo.complete && "line-through text-gray-900"}`}
                            onDoubleClick={() => dispatch({type:"TOGGLE_TODO", payload: todo})}> {todo.text}</span>

                        <button>Edit</button>
                        <button onClick={() => dispatch({type: "REMOVE_TODO", payload: todo})}>Delete</button>
                    </li>)}
            </ul>
        </div>
    )
}

export default TodoList;