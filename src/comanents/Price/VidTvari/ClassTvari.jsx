import React from "react";
import clases from './ClassTvari.modules.css';


const ClassTvari = (props) => {

return (
       <div className={clases.ClassTvari}>
              
                 <div className='ClassTvariBlock'>
                 <div>{ props.wock } </div>
                 <div> { props.price}</div>
                
                 </div>
       </div>
);

}

export default ClassTvari;