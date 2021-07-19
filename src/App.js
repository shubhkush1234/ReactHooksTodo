import React, {useContext, useReducer} from 'react';
import {userContext} from './index';


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
      {/* <userContext.Consumer>
        {(value) => <div>Hello {value}</div>}
      </userContext.Consumer> */}
      <button style={{backgroundColor:'lightGreen'}} onClick={() => dispatch({type: "increment"})}>Increment count: {state.count}</button>
    </div>
  );
}

export default App;
