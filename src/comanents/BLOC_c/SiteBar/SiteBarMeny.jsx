import React from "react";
import imgName from "../../../assets/img/img.png";
import imgName2 from "../../../assets/img/img2.png";
import imgName3 from '../../../assets/img/img3.png';
import imgName4 from '../../../assets/img/img4.png';
import clases from "./SiteBarMenu.module.css";

const SiteBarMeny = (props) => {
  return (
    <div>
      <button className="SiteBarMeny" href="#">
        <div className="SiteBarIcons">
          
          <img src={imgName} className={clases.imgIcon} />
        </div>
        <div className="SiteBarMenyT">груминг</div>
      </button>

      <button className="SiteBarMeny" href="#">
        <div className="SiteBarIcons">
          
          <img src={imgName2} className={clases.imgIcon} />
        </div>
        <div className="SiteBarMenyT">прайс</div>
      </button>

      <button className="SiteBarMeny" href="#">
        <div className="SiteBarIcons">
         
          <img
            src={imgName3} className={clases.imgIcon}
            alt=""
            width="30"
          />
        </div>
        <div className="SiteBarMenyT">галерея</div>
      </button>

      <button className="SiteBarMeny" href="#">
        <div className="SiteBarIcons">
          
          <img
            src={imgName4} className={clases.imgIcon}
            alt=""
            width="30"
          />
        </div>
        <div className="SiteBarMenyT">отзывы</div>
      </button>
    </div>
  );
};
export default SiteBarMeny;
