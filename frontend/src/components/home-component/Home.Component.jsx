import React, { useEffect } from "react";
import "./home.style.scss";
import carImage from "../../assets/car-2-transparent.webp";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="HomeContainer" id="hero">
      <div className="secContainer">
        <div data-aos="fade-up" className="homeText">
          <h2 className="homeTitle">
            Buy/Rent <br /> your
            <span className="homeTitlePart">Ambition car</span>
          </h2>
          <p className="homeParagraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            officiis quos id rerum exercitationem amet recusandae perspiciatis
            eius, reiciendis laboriosam a nulla dolor voluptates ad, mollitia ut
            odio, praesentium quaerat.
          </p>

          <div className="homeButton">
            <button data-aos="fade-left" className="btn-buy">
              Buy
            </button>
            <button data-aos="fade-right" className="btn-rent">
              Rent
            </button>
          </div>
        </div>

        <div className="homeImageDiv">
          <img
            data-aos="fade-down-left"
            src={carImage}
            alt="car image"
            className="homeImage"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
