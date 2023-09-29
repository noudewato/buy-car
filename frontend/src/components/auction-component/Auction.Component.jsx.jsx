import React, {useEffect} from "react";
// import "./auction.style.scss";
import AOS from 'aos'
import 'aos/dist/aos.css'

const AuctionComponent = ({ car }) => {
  const { name, year, image, sellingPrice, option, condition, miles } = car;
    useEffect(() => {
      AOS.init({
        duration: 3000,
      });
    }, []);
  return (
    <div class="car__box" data-aos="fade-up">
      <div class="box__img">
        <img src={image} alt="" />
      </div>
      <div class="box__text">
        <h3>
          {name} <span>{year}</span>
        </h3>
        <h3>
          <b class="currency">$</b>
          {sellingPrice}
        </h3>
      </div>
      <span className="miles">{miles} miles</span>
      <div className="textBottom">
        <div className="textTitle" style={{ color: "rgb(9, 220, 9)" }}>
          {condition}
        </div>
        <a href="#">{option}</a>
      </div>
    </div>
  );
};

export default AuctionComponent;
