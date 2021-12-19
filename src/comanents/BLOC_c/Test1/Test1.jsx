import React from "react";
import Abonent from "./Abonent/Abonent";
import clases from './Test1.module.css';
import AddMasseges from "./AddMassege/AddMasseges";

const Test1 = (props) => {
    return (
        <div className={clases.Test1}>
<Abonent/>
<AddMasseges/>

        </div>
    )
}

export default Test1;