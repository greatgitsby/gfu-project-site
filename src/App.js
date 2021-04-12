import React from 'react';
import logo from './gfu.png';
import teampic from './img/team.jpg';
import teampic_new from './img/team-new.jpg';
import teampic_masked from './img/team-masked.jpg';
import binarybox_final from './img/binarybox-final.jpg';
import workflow from './img/flow.png';
import binarybox from './img/binarybox.jpeg';
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
          or the submission process, contact us at <strong>gfuprojects@gmail.com</strong>
        </h5>
        <p>
          We are a team of five multi-disciplinary engineering,
          Computer Science, and Information Systems students whose desire
          is to serve educators by providing tools and resources that enable
          them to reach their students in meaningful ways.
          We encourage you to fill out the Project Ideation Form if
          you have questions or project ideas!
        </p>

        <img class="App-pic" src={binarybox_final} alt="binary box pic" />
        <p>
          As an example, we are currently building a small learning device designed to help students understand binary numbers. The client had voiced the difficulty in teaching his students about binary numbers. Our team took his struggle and worked to develop a solution. We completed the brainstorming, early design phases, and are finished the final product; the client will be receiving his complete product soon!
        </p>

        <img src={workflow} className="App-workflow" alt="workflow" />

        <div className="App-pic">
          <img class="bottom" src={teampic_new} alt="team pic" />
          <img class="top" src={teampic_new} alt="team pic w mask" />
        </div>

        <p>Meet the team!</p>
        <p style={{marginBottom: "5vh"}}>Trey Moen, Natascha Lambing, Wesley Seigneur, Christina Brandão, Adam Hawker</p>
      </header>
    </div>
  );
}
