import React, {useContext, useReducer} from 'react';
import {userContext} from './index';


const initialState = {
  count: 0
}

const App = () => {

  return (
    <div className="App">
      <userContext.Consumer>
        {(value) => <div>Hello {value}</div>}
      </userContext.Consumer>

    </div>
  );
}

export default App;
