import logo from './ChibiGanyuLogo.png';
import './App.css';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const resetTimer = (e) => {
    setCount(count + 100 )
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Ganyu Chibi {count}
        </p>
        <Button variant="contained" color="primary" onClick={resetTimer}>
          Click me
        </Button>
      </header>
    </div>
  );
}

export default App;
