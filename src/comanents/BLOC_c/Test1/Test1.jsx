import React from "react";
import Abonent from "./Abonent/Abonent";
import clases from './Test1.module.css';
import AddMasseges from "./AddMassege/AddMasseges";

const Test1 = (props) => {

    let AddMassegeg = React.createRef();

    let Addtext = () => {
        let Text2 = AddMassegeg.current.value;
        alert(Text2);
    }
    return (
        <div className={clases.Test1}>
            <div> <textarea ref={AddMassegeg} ></textarea>

                <div>
                    <button onClick={Addtext} >add</button>
                </div>

            </div>

            <div></div>
            <Abonent />
            <AddMasseges />

        </div>
    )
}

export default Test1;