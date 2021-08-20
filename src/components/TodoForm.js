import React, { useState, useContext, useEffect } from 'react';
import TodosContext from '../context';

export default function TodoForm(){
    const [todo, setTodo]= useState("");
    const  {state: {currentTodo = {}}, dispatch}  = useContext(TodosContext);

    useEffect(() => {
        if(currentTodo.text){
            setTodo(currentTodo.text)
        }
    }, [currentTodo.id]);
    
    const handleSubmit = event => {
        event.preventDefault();
        alert("submitted");
        if(currentTodo.text){
            dispatch({type: "UPDATE_TODO", payload: todo})
        }
        else{
            dispatch({ type: "ADD_TODO", payload: todo });
        }
        setTodo("")
        // alert(todo)
        setTodo(""); // to empty the input box and to make it a controlled component
    }

    return (
        <form className="flex justify-content p-5" onSubmit={handleSubmit}>
            <input type="text"
                className="border-black border-solid border-2"
                onChange={event => setTodo(event.target.value)}
                value={todo} />
        </form>
    )
}
