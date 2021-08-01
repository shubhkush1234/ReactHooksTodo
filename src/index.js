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

const App = () => {
    const initialState = useContext(TodosContext);
    const [state, dispatch] = useReducer(TodosReducer, initialState) ;

    return(
        <TodosContext.Provider value= {{ state, dispatch }}>
            <TodoForm/>
            <TodoList/>
        </TodosContext.Provider>

    )
}




ReactDOM.render(<App/>, document.getElementById("root"));

