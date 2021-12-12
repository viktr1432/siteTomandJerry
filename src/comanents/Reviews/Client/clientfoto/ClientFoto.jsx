import React from "react";
import clases from './ClientFoto.module.css'
import img7 from '../../../../assets/img/img7.png';



const ClientFoto = (props) => {

    return (
        <div className={clases.ClientFoto}>
            <img src={img7} alt="" />
        </div>

    );
}
export default ClientFoto;