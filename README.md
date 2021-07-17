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