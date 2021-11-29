import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Conteiners from './comanents/Conteiners.jsx'


const App = () => {
  return (
    <BrowserRouter>
    <div className="BlockContent">
      <Conteiners />
    </div>
    </BrowserRouter>
  );
};

export default App;
