import React, { useState, useContext, useEffect } from 'react';
import TodosContext from '../context';
import axios from 'axios';

export default function TodoForm(){
    const [todo, setTodo]= useState("");
    const  {state: {currentTodo = {}}, dispatch}  = useContext(TodosContext);

    useEffect(() => {
        if(currentTodo.text){
            setTodo(currentTodo.text)
        }
    }, [currentTodo.id]);
    
    const handleSubmit = async event => {
        event.preventDefault();
        alert("submitted");
        if(currentTodo.text){
            const response = await axios.patch(`http://localhost:3000/todos/${currentTodo.id}`, {
                text: todo 
           });
            dispatch({type: "UPDATE_TODO", payload: response.data})
        }
        else{
            const response = await axios.post("http://localhost:3000/todos", {
                id: Math.floor(Math.random() * 100) + 1,
                text: todo,
                complete: false
            })
            dispatch({ type: "ADD_TODO", payload: response.data });
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
