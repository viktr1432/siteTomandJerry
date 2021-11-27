import React from "react";
import clases from './Cosial.module.css';
import img5 from '../assets/img/img5.png'
const Cosial = () => {


    return (
        <div className={clases.Cosial}>

            <div className="Cosialicons">
                <a href="#"> <img src={img5} alt="" width='25px' /></a>
            </div>

            <div className="Cosialicons">
                <a href="#"> <img src="https://mca-partner.ru/wp-content/uploads/2020/05/whatsapp-logo.png" alt="" width='25px' /></a>
            </div>

            <div className="Cosialicons">
                <a href="#"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt="" width='25px' /></a>
            </div>

        </div>
        // szfsf



    );
}
export default Cosial;