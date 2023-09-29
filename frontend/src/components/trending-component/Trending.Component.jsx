import React, {useEffect} from "react";
import "./trending.style.scss";
import AOS from 'aos'
import 'aos/dist/aos.css'

const TrendingComponent = ({ car }) => {
  const {
    name,
    year,
    image,
    sellingPrice,
    rentingPrice,
    condition,
    option,
    miles,
  } = car;

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
          {sellingPrice ? (
            <>
              <b class="currency">$</b>
              {sellingPrice}
            </>
          ) : (
            <>
              <b class="currency">$</b>
              {rentingPrice}/<span>day</span>
            </>
          )}
        </h3>
      </div>
      <span className="miles">{miles} miles</span>
      <div className="textBottom">
        <div className="textTitle">
          {condition === "Home Used" ? (
            <div className="textTitle1">Home Used</div>
          ) : condition === "Brand New" ? (
            <div className="textTitle2">Brand New</div>
          ) : (
            <></>
          )}
        </div>
        <a href="#">{option}</a>
      </div>
    </div>
  );
};

export default TrendingComponent;
