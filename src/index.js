import React from "react";
import ReactDOM from "react-dom";
// import App from "./AppClass";
// import App from "./AppFunction";
import App from "./App";
// import App from "./Login";
import * as serviceWorker from "./serviceWorker";

const username = "Shubham";

ReactDOM.render(<App name={username}/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
