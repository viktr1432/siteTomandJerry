import React from "react";
import { NavLink } from "react-router-dom";
import clases from '../Dialog/Dialogs.module.css';
import ImgSm from '../../assets/img/sm.png';
import DialogItem from "./DialogItem/DialogItem";

// const DialogItem = (props) => {

//     let path = "/Dialogs/" + props.id;
//     return (
//         <div className={clases.Dialog + " " + clases.active}>
//             <img src={ImgSm} className={clases.imgIcon} alt="" />
//             <NavLink to={path}> {props.name} </NavLink>
//         </div>

//     )
// }
const Massedes = (props) => {
    

    return (
        <div className={clases.messade}>
            {props.massedes}
        </div>
    );
}


const Dialogs = (props) => {
   
    
    let massedesElement=props.massedesData
    .map ((massedges)=><Massedes massedes={massedges.massedes} />)

    let DialogsElenent=props.DialogsData
    .map ((Dialog)=><DialogItem name={Dialog.name} id={Dialog.id} />)

   
    return (
        <div className={clases.Dialogs}>

            <div className={clases.DialogItems}>
            {DialogsElenent}
                {/* <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
                 */}
            </div>

            <div className={clases.messades}>
            {massedesElement}
            <div>
               <textarea name="" id="" cols="30" rows="5"></textarea>
               <div><button>отправить сообщение</button></div>
               </div>
            </div>

        </div>
    )
}
export default Dialogs;