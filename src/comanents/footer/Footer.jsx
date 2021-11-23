import React from "react";


import FooterInfo from "./FooterInfo";
import Cosial from "../../Cosial/Cosial";
import clases from './Footer.module.css' ;

const Footer = () => {
    return (
        <div className={clases.Footer}>
        
            Tom&Jerry
        
        <Cosial/>        
        <FooterInfo/>
        </div>
    );
    }
export default Footer;