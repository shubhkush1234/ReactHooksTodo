import React, {useContext, useReducer} from 'react';
import {userContext} from './index';


const initialState = {
  count: 0
}

function reducer(state, action){
  switch(action.type){
    case "increment":
      return {
        count: state.count + 1
      }
      case "decrement":
      return {
        count: state.count - 1
      }
      case "reset":
        return  initialState
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
      <h3>Count is: {state.count}</h3>

      <button style={{backgroundColor:'lightGreen'}} onClick={() => dispatch({type: "increment"})}>Increment Btn: </button><br></br><br></br>
      <button style={{backgroundColor:'red'}} onClick={() => dispatch({type: "decrement"})}>Decrement Btn</button>
      <button style={{backgroundColor:'yellow'}} onClick={() => dispatch({type: "reset"})}>reset Btn</button>


    </div>
  );
}

export default App;
