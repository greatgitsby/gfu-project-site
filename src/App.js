import React from 'react';
import logo from './gfu.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GFU Engineering Project Commission
        </p>
        <a
          className="App-link"
          href="https://forms.gle/WBk8XgzJiv22jfea7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project Ideation Form
        </a>
        <a
          className="App-link"
          href="mailto:gfuprojects@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </header>
    </div>
  );
}

export default App;
