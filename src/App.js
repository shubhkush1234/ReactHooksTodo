import React, {useContext, useReducer} from 'react';
import {userContext} from './index';


const initialState = {
  count: 0
}

const App = () => {
  // using useContext() hook
  const value = useContext(userContext);

  return (
    <div className="App">
      Hello {value}
      {/* <userContext.Consumer>
        {(value) => <div>Hello {value}</div>}
      </userContext.Consumer> */}



    </div>
  );
}

export default App;
