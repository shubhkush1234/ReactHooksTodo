import React from "react";
import ReactDOM from "react-dom";
// import App from "./AppClass";
// import App from "./AppFunction";
import App from "./App";
// import App from "./Login";

export const userContext = React.createContext();

const username = "Shubham";



ReactDOM.render(<userContext.Provider value={username}>
                    <App/>
                </userContext.Provider>, document.getElementById("root"));

