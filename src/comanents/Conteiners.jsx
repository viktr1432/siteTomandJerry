import React from "react";
import Heder from './header/Heder'
import SiteBar from "./BLOC_c/SiteBar/SiteBar";
import BlokInfo from "./BLOC_c/BlocInfo/BlokInfo";
import BlokFoto from "./BLOC_c/BlocInfo/BlockFoto/BlokFoto";
import Footer from './footer/Footer';



const Conteiners = () => {
    return (
        <div className='Conteiners'>
            <Heder />
            <SiteBar />
            <BlokInfo />
            <BlokFoto />
            <Footer />
        </div>

    );
}
export default Conteiners;