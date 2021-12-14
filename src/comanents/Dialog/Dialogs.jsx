import React from "react";
import { NavLink } from "react-router-dom";
import clases from '../Dialog/Dialogs.module.css';
import ImgSm from '../../assets/img/sm.png';

const DialogItem = (props) => {

    let path = "/Dialogs/" + props.id;
    return (
        <div className={clases.Dialog + " " + clases.active}>
            <img src={ImgSm} className={clases.imgIcon} alt="" />
            <NavLink to={path}> {props.name} </NavLink>
        </div>

    )
}
const Massedes = (props) => {
    

    return (
        <div className={clases.messade}>
            {props.massedes}
        </div>
    );
}


const Dialogs = (props) => {
    let massedesData = [
        { id: 1, massedes: 'Alecscscx' },
        { id: 2, massedes: 'Ale' },
        { id: 3, massedes: 'Alevg gh' },
        { id: 4, massedes: 'Alerh ' },

    ]
    let DialogsData = [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Ale' },
        { id: 3, name: 'Vas' },
        { id: 4, name: 'Jora' },
        { id: 5, name: 'Lena' },
        { id: 6, name: 'Liza' },
        { id: 7, name: 'Lera' },
    ]
    let massedesElement=massedesData
    .map ((massedges)=><Massedes massedes={massedges.massedes} />)

   
    return (
        <div className={clases.Dialogs}>

            <div className={clases.DialogItems}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id} />
                <DialogItem name={DialogsData[3].name} id={DialogsData[3].id} />
                <DialogItem name={DialogsData[4].name} id={DialogsData[4].id} />
                <DialogItem name={DialogsData[5].name} id={DialogsData[5].id} />
                <DialogItem name={DialogsData[6].name} id={DialogsData[6].id} />
            </div>




            <div className={clases.messades}>
            {massedesElement}
                {/* <Massedes massedes={massedesData[0].massedes} />
                <Massedes massedes={massedesData[1].massedes} />
                <Massedes massedes={massedesData[2].massedes} />
                <Massedes massedes={massedesData[3].massedes} /> */}
            </div>

        </div>
    )
}
export default Dialogs;