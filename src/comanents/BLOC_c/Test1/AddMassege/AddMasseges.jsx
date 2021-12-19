import React from "react";
import clases from './AddMasseges.module.css'

import AddLogoMasseges from "./AddLogoMasseges/AddLogoMasseges";
import Abonent from "../Abonent/Abonent";
import imgTest from './../../../../assets/img/len.jpg'

let FotoT=<img src={imgTest} alt="" />

const AddMasseges=(props)=>{
   let testmassegeData=[
{id:1, testmassege:'ghgfwe fef ef ew hghgh', },

    ] 

  let testMesElement =testmassegeData
  .map ((mas)=> <AddLogoMasseges testmassege={mas.testmassege} id= {mas.id} />)

 return (
<div className={clases.AddMasseges}>

{testMesElement}
<div></div>

    </div>
 );
}
export default AddMasseges;