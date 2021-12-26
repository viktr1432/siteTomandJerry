import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import state from './../src/state.js'
import {addtestmassegeData} from './state';
import {addGrumTebl} from './state';

// addGrumTebl();
addtestmassegeData( 'gdgdgdgfewf efewfef gd');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addGrumTebl={addGrumTebl}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
