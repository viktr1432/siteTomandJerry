import React from "react";
import ClassTvari from "../VidTvari/ClassTvari";
import PriceFoto from "../PriceFoto/PriceFoto";
import clases from "./PriceContey.module.css"

const PriceContey = () => {
 return(

    <div className={clases.PriceContey}>
      <div className='PriceConteyBlock'>
      <ClassTvari  wock='маленькие породы собак: (купание, сушка, стрижка,гигиена)' price=' от 800 рубл' />      
      <PriceFoto foto1='<img src="https://sobaky.info/wp-content/uploads/2018/01/y5.jpg" alt="rf" />'/>
      </div>
      <div className='PriceConteyBlock'>
      <ClassTvari  wock='средние породы собак: (купание, сушка, стрижка,гигиена)' price=' от 1000 рубл' />      
      <PriceFoto/>
      </div>
      <div className='PriceConteyBlock'>
      <ClassTvari  wock='крупные породы собак: (купание, сушка, стрижка,гигиена)' price=' от 1500 рубл' />      
      <PriceFoto/>
      
      </div>
      <div className='PriceConteyBlock'>
      <ClassTvari  wock=' коты: (купание, сушка, стрижка,гигиена)' price=' от 1000 рубл' />      
      <PriceFoto/>
      </div>

</div> 

);

}
export default PriceContey;