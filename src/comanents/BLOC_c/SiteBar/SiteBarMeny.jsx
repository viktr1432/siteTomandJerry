import React from "react";
import imgName from "../../../assets/img/img.png";
import imgName2 from "../../../assets/img/img2.png";
import imgName3 from '../../../assets/img/img3.png';
import imgName4 from '../../../assets/img/img4.png';
import imgName5 from '../../../assets/img/img5.png';
import clases from "./SiteBarMenu.module.css";

const SiteBarMeny = () => {
  return (
    <div>
      <button className="SiteBarMeny" >
        <div className="SiteBarIcons">
          <img src={imgName5} className={clases.imgIcon} />
        </div>
        <a className="SiteBarMenyT" href='/'>главная</a>
      </button>



      <button className="SiteBarMeny" >

        <div className="SiteBarIcons">
          <img src={imgName} className={clases.imgIcon} />
        </div>
        <a href='/' className="SiteBarMenyT">груминг</a>
      </button>




      <button className="SiteBarMeny" >
        <div className="SiteBarIcons">

          <img src={imgName2} className={clases.imgIcon} />
        </div>
        <a href="/" className="SiteBarMenyT">прайс</a>
      </button>

      <button className="SiteBarMeny" >
        <div className="SiteBarIcons">

          <img
            src={imgName3} className={clases.imgIcon}
            alt=""
            width="30"
          />
        </div>
        <a className="SiteBarMenyT" href="/" >галерея</a>
      </button>

      <button className="SiteBarMeny" >
        <div className="SiteBarIcons">

          <img
            src={imgName4} className={clases.imgIcon}
            alt=""
            width="30"
          />
        </div>
        <a className="SiteBarMenyT" href="/">отзывы</a>
      </button>


    </div>
  );
};
export default SiteBarMeny;
