import React from "react";
import clases from './Client.module.css'
import img7 from '../../../assets/img/img7.png';

const Client = (props)=>{
    return (
<div className={clases.Client}>

            <div>
                <img src={img7} alt=""/>
                <div>{props.nameClient}</div>
            </div>
            
            

</div>
    );
}
export default Client;