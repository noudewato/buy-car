import React, { useEffect } from "react";
import "./brand.style.scss";
import brandImage1 from "../../assets/toyotalogo.png"
import AOS from 'aos'
  import 'aos/dist/aos.css'

const Brand = () => {
  useEffect(() => {
    AOS.init({
      duration : 3000
    })
  },[])
  return (
    <div className="Brand" data-aos="fade-up">
      <div className="brandHeader">
        <h2>Explore our top brand</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="brandCenter">
        <div className="brandBox" data-aos="fade-up">
          <img src={brandImage1} alt="logo" />
          <div className="brandInfo">
            <h3>Toyota</h3>

            <p>from GH30k</p>
          </div>
        </div>

        <div className="brandBox" data-aos="fade-up">
          <img src={brandImage1} alt="logo" />
          <div className="brandInfo">
            <h3>Toyota</h3>

            <p>from GH30k</p>
          </div>
        </div>

        <div className="brandBox" data-aos="fade-up">
          <img src={brandImage1} alt="logo" />
          <div className="brandInfo">
            <h3>Toyota</h3>

            <p>from GH30k</p>
          </div>
        </div>

        <div className="brandBox" data-aos="fade-up">
          <img src={brandImage1} alt="logo" />
          <div className="brandInfo">
            <h3>Toyota</h3>

            <p>from GH30k</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
