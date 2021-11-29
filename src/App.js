import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Conteiners from "./comanents/Conteiners.jsx";

const App = () => {
  return (
    <div className="BlockContent">
      <Routes>
        <Route component={Conteiners} />
      </Routes>

      {/* <Conteiners /> */}
    </div>
  );
};

export default App;
