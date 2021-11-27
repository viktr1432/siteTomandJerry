import React from "react";
import BlocFotoItem from './BlocFotoItem/BlokFotoitem.jsx'
import clases from './../BlockFoto/../../BlocInfo/BlockFoto/BlokFoto.module.css'

const BlokFoto = () => {
    return (

        <div className={clases.BlokFoto} > 

            
            <BlocFotoItem/>
        </div>
    );
}
export default BlokFoto;