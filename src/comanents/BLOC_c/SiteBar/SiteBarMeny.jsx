import React from "react";


const SiteBarMeny = () => {
    return (
        <div>
          <button className='SiteBarMeny' href='#'  >           
            <div className='SiteBarIcons' >    <img src="https://e7.pngegg.com/pngimages/996/351/png-clipart-scissors-icon-scissors-icon-logo-wikimedia-commons.png" alt="" width='30'/> 
            </div>
            <div className='SiteBarMenyT' >груминг</div> 
            </button>

            <button className='SiteBarMeny' href='#'>           
            <div className='SiteBarIcons'>    <img src="https://w7.pngwing.com/pngs/380/741/png-transparent-computer-icons-price-service-others-company-text-service.png" alt="" width='30'/> 
            </div>
            <div className='SiteBarMenyT'>прайс</div> 
            </button>

            <button className='SiteBarMeny' href='#'>            
            <div className='SiteBarIcons'>    <img src="https://image.flaticon.com/icons/png/512/964/964016.png" alt="" width='30'/> 
            </div>
            <div className='SiteBarMenyT'>галерея</div> 
            </button>
            
            <button className='SiteBarMeny' href='#'>           
            <div className='SiteBarIcons'>    <img src="https://w7.pngwing.com/pngs/871/595/png-transparent-customer-review-information-others-hand-service-logo.png" alt="" width='30'/> 
            </div>
            <div className='SiteBarMenyT'>отзывы</div> 
            </button>
            
            
        </div>
        
    );
    }
export default SiteBarMeny;