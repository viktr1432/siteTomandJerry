import React from "react";
import clases from './Client.module.css'
import ClientFoto from "./clientfoto/ClientFoto";



const Client = (props) => {

    return (
        <div className={clases.Client}>

<ClientFoto/>
            

        </div>

    );
}
export default Client;