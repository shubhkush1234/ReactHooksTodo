import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [count, setCount] = useState(0);
  const [isOn, SetIsOn] = useState(false);

  const incCounter = (state) => {
    setCount(count + 1);
    console.log(count);
  }

  const styless = {
    backgroundColor: "black",
    height: "50px",
    width: "50px"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={incCounter}>I am clicked {count}</button>
  <span style={ styless}>Hi hello</span>
  <div></div>
        </p>
      </header>
    </div>
  );
}

export default App;
