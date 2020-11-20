import React from 'react';
import logo from './gfu.png';
import teampic from './img/team.jpg';
import workflow from './img/flow.png';
import { Button } from '@material-ui/core';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          GFU EPIC
        </h2>
        <h3>
          Engineering Project Innovation Commission
        </h3>
        <p>
          We are a team of five multi-disciplinary engineering,
          Computer Science, and Information Systems students who
          believe that all high school students deserve a quality
          education despite comprehensive distance
          learning. Our desire is to serve students by providing 
          educators like you with tools and resources that enable
          you to reach your students in meaningful ways.
          We encourage you to fill out the Project Ideation Form if
          you have questions or project ideas!
        </p>

        <img src={workflow} className="App-workflow" alt="workflow" />

        <img src={teampic} className="App-pic" alt="team pic" />
        <p>Meet the team!</p>
        <p style={{marginBottom: "5vh"}}>Trey Moen, Natascha Lambing, Wesley Seigneur, Christina Brandão, Adam Hawker</p>
        
        <h2>
          Resources
        </h2>
        <Button
          variant="contained"
          className="App-link"
          color="primary"
          href="https://forms.gle/WBk8XgzJiv22jfea7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Project Ideation Form
          </Button>
        <h5>
          If you have any questions about us, what we are about, 
          or the submission process, contact us at gfuprojects@gmail.com
        </h5>
      </header>
    </div>
  );
}
