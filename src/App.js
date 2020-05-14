import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state= {
    Counter: 0
  }

  incCounter = (state) => {
    this.setState({
      Counter: this.state.Counter + 1
    });
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
    <button onClick={this.incCounter}>I am clicked {this.state.Counter}</button>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
