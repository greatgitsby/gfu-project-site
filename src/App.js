import React from 'react';
import logo from './gfu.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          GFU Engineering Project Commission
        </h3>
        <p>Contact us at gfuprojects@gmail.com</p>
        <a
          className="App-link"
          href="https://forms.gle/WBk8XgzJiv22jfea7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project Ideation Form
        </a>
      </header>
    </div>
  );
}

export default App;
