import logo from './ChibiGanyuLogo.png';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [resetDate, setResetDate] = useState(new Date())

  useEffect(() => {
    checkDate()
  });

  const updateCount = (e) => {
    setCount(count + 100 )
  };

  const resetTimer = (e) => {
    var date1 = new Date();
    setResetDate(date1)
  };

  const checkDate = () => {
    var msDiff = new Date().getTime() - resetDate.getTime();    //Future date - current date
    var days = Math.floor(msDiff / (1000 * 60 * 60 * 24));
    if (days>2) {
      sendText()
    }

  }

  const sendText = () => {


  }

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
        <Button variant="contained" color="primary" onClick={updateCount}>
          Click me
        </Button>
        <p>
          Time : {resetDate.toLocaleString()}
        </p>
        <Button variant="contained" color="primary" onClick={resetTimer}>
          Reset Timer {resetDate.toLocaleString()}
        </Button>
      </header>
    </div>
  );
}

export default App;
