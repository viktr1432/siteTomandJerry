import React from "react";

import PriceBl from "./../Price/PriceBl";



const Price = () => {
let a = React.createRef();
let GG=()=>{
    let R=a.current.value;
    alert(R);
}


    return (
        <div className='Price'>
            <h2 className="Pr"> прайс </h2>

            <PriceBl />
<div>
    <textarea ref={a}></textarea>
    <button onClick={GG}>grg gs</button>
</div>
        </div>

    );
}
export default Price;