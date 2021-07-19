This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

1. Controlled Componets:

Whose values are to be controlled by what we have in state.

2. <div style={{ textAlign: "center" }}>... </div>

3. How to use context API?

Index.js

```
export const userContext = React.createContext();

const username = "Shubham";

ReactDOM.render(<userContext.Provider value={username}>
                    <App/>
                </userContext.Provider>, document.getElementById("root"));
```

App.js

```
<userContext.Consumer>
        {(value) => <div>Hello {value}</div>}
      </userContext.Consumer>

```

4. useContext() hook:

provider component: 

```
export const userContext = React.createContext();

const username = "Shubham";

ReactDOM.render(<userContext.Provider value={username}>
                    <App/>
                </userContext.Provider>, document.getElementById("root"));
```

consumer component:

```

const App = () => {
  // using useContext() hook
  const value = useContext(userContext); //passing ApplicationContext to useContext() hook

  return (
    <div className="App">
      Hello {value}
    </div>

```

5. useReducer() hook: 

```


const initialState = {
  count: 0
}

function reducer(state = initialState, action){
  switch(action.type){
    case "increment":
      return {
        count: state.count + 1
      }
    default:
      return state
  }
}

const App = () => {
  // using useContext() hook
  const value = useContext(userContext);

  //using useReducer() hook
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div>Hello {value}</div>
      
      <button style={{backgroundColor:'lightGreen'}} onClick={() => dispatch({type: "increment"})}>Increment count: {state.count}</button>
    </div>

```