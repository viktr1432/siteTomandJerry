import React from "react";
import clases from './Abonent.module.css'
import imgh from '../../../../assets/img/h1.png'
const Ab = (props) =>{
    return(
    <div className= {clases.Abonent}> 
    <img src="imgh" alt="d" />{props.Ab}</div>
    );
}

const Abonent = (props)=>{
let AbData= Ab [
    {id:1, name:'Lex'},
    {id:2, name:'Lexd'},
]
    return (
<div className={clases.Abonent}>


</div>
    );
}
export default Abonent;