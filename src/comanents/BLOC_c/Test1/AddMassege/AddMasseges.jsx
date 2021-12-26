import React from "react";
import clases from './AddMasseges.module.css'
import AddLogoMasseges from "./AddLogoMasseges/AddLogoMasseges";


const AddMasseges = (props) => {

   let testMesElement = props.testmassegeData
      .map((mas) => <AddLogoMasseges testmassege={mas.testmassege} id={mas.id} />)

   return (
      <div className={clases.AddMasseges}>
         {testMesElement}
      </div>
   );
}
export default AddMasseges;