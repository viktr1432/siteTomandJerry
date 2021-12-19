import React from "react";
import imgin from './../../../../../assets/img/inyn.png'
import clases from './AdLog.module.css'





const AddLogoMasseges = (props) => {
    return (<div>
        <div className={clases.AdLog}>
            <img src={imgin} alt="" /> {props.testmassege }{props.fotoTest}

        </div>
    </div>
    );
}
export default AddLogoMasseges;