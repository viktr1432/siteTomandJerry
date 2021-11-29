import React from "react";
import Heder from './header/Heder'
import SiteBar from "./BLOC_c/SiteBar/SiteBar";
import BlokInfoPage from './BLOC_c/BlocInfo/BlocInfoPage/BlocInfoPage'
import BlokFoto from './BLOC_c/BlocInfo/BlockFoto/BlocFoto'
import Footer from './footer/Footer';
import { Route } from 'react-router-dom'
import BlokInfo from "../comanents/BLOC_c/BlocInfo/BlocInfo/BlokInfo";

const Conteiners = () => {
    return (
        <div className='Conteiners'>
            <Heder />
            <SiteBar />
            <div>
                <BlokInfoPage />
            </div>
            <BlokFoto />
            <Footer />
        </div>

    );
}
export default Conteiners;