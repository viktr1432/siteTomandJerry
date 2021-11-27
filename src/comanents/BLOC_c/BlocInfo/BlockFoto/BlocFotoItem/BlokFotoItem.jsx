import React from "react";
import imgFoto from '../../../../../assets/galery/img11.jpeg';


const BlocFotoItem = (props) => {
    return (
        <div className='BlocFotoItem' >
            <div>
                <img  src={imgFoto}/>
            </div>
            <div>
                <img  src={imgFoto}/>
            </div>
        </div>
    )
   
}
export default BlocFotoItem;