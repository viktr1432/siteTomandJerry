import React from "react";
import "./App.css";
import Conteiners from "./comanents/Conteiners.jsx";

const App = (props) => {
  
  return (
    <div className="BlockContent">
      <Conteiners ClientRevievs={props.state.ClientRevievs} massedesData={props.state.massedesData} 
      DialogsData={props.state.DialogsData} 
      GrumTebl={props.state.GrumTebl}  testmassegeData={props.state.testmassegeData}
      addGrumTebl={props.addGrumTebl}/>
    </div>
  );
};

export default App;
