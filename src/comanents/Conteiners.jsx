import React from "react";
import Heder from './header/Heder'
import SiteBar from "./BLOC_c/SiteBar/SiteBar";
import BlokInfoPage from './../comanents/BLOC_c/BlocInfo/BlocInfo/BlokInfo'
import BlokFoto from './BLOC_c/BlocInfo/BlockFoto/BlocFoto'
import Footer from './footer/Footer';



const Conteiners = () => {
    return (
        <div className='Conteiners'>
            <Heder />
            <SiteBar />
             <BlokInfoPage />
            <BlokFoto/>
            <Footer />
        </div>

    );
}
export default Conteiners;