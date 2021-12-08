import React from "react";
import clases from '../ReviewsGrup/ReviewsGrup.module.css'
import Client from "../Client/Client";





const ReviewsGrup = (props) => {
    return (

        <div className={clases.ReviewsGrup} >
            
            <Client nameClient='Name'/>
            {props.massedges1}
            
            
        </div>
    )
}
export default ReviewsGrup;