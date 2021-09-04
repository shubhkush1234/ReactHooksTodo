import React, {useContext, useReducer} from "react";
import ReactDOM from "react-dom";
// import App from "./AppClass";
// import App from "./AppFunction";
// import App from "./App";
// import App from "./Login";
import TodosContext from "./context";
import TodosReducer from "./reducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useState, useEffect } from "react";
import axios from "axios";

//Custom hook
const useAPI = endpoint => {
    const  [data, setData] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async() => {
        const response = await axios.get(endpoint);
        setData(response.data)
    }
    return data;
}


const App = () => {
    const initialState = useContext(TodosContext);
    const [state, dispatch] = useReducer(TodosReducer, initialState) ;
    const savedTodos = useAPI("http://localhost:3000/todos");

    useEffect( () => {
        dispatch({
            type: "GET_TODOS",
            payload: savedTodos
        })
    }, [savedTodos]);

    return(
        <TodosContext.Provider value= {{ state, dispatch }}>
            <TodoForm/>
            <TodoList/>
        </TodosContext.Provider>

    )
}




ReactDOM.render(<App/>, document.getElementById("root"));

