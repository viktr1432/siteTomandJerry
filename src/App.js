import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
import Conteiners from "./comanents/Conteiners.jsx";

const App = () => {
  return (
    <div className="BlockContent">
      <BrowserRouter>
        <Routes>
          <Route component={Conteiners} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
