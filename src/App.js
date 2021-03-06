import React from 'react';
import logo from './gfu.png';
import teampic_new from './img/team-new.jpg';
import binarybox_final from './img/binarybox-final.jpg';
import workflow from './img/flow.png';
import binarybox_gif from './img/binarybox.gif';
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
          color="primary"
          href="https://forms.gle/WBk8XgzJiv22jfea7"
          target="_blank"
          rel="noopener noreferrer"
          size="medium"
        >
          <span>Project Ideation Form</span>
        </Button>
        <p style={{fontSize: "2vw"}}>
          If you have any questions about us, what we are about,
          or the submission process, contact us at: gfuprojects@gmail.com
        </p>
        <p>
          Welcome to EPIC. We are a team of five multi-disciplinary engineering,
          Computer Science, and Information Systems students whose desire
          is to serve educators by providing tools and resources that enable
          them to reach their students in meaningful ways.
          We encourage you to fill out the Project Ideation Form linked above if
          you have questions or project ideas!
        </p>

        <div className="App-pic">
          <img class="bottom" src={binarybox_gif} alt="team pic" />
          <img class="top" src={binarybox_final} alt="team pic w mask" />
        </div>
        
        <p>
          As an example, we are currently building a small learning device designed to help students understand binary numbers. The client had voiced the difficulty in teaching his students about binary numbers. Our team took his struggle and worked to develop a solution. We completed the brainstorming, early design phases, and have finished the final product; the client will be receiving his complete product soon!
        </p>

        <img src={workflow} className="App-workflow" alt="workflow" />

        <div className="App-pic">
          <img class="bottom" src={teampic_new} alt="team pic" />
          <img class="top" src={teampic_new} alt="team pic w mask" />
        </div>

        <p>Meet the team!</p>
        <p style={{marginTop: 0}}>Trey Moen, Natascha Lambing, Wesley Seigneur, Christina Brandão, Adam Hawker</p>
      </header>
    </div>
  );
}
