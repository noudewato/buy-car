import React, { useEffect } from "react";
import "./trending.scss";
import TrendingComponent from "../../components/trending-component/Trending.Component";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import carImage1 from "../../assets/toyota-camry.webp";
import carImage2 from "../../assets/civic.jpg";
import carImage3 from "../../assets/bmw.jpg";
import carImage4 from "../../assets/audi.webp";
import carImage5 from "../../assets/nissan.jpg";
import 'aos/dist/aos.css'
import AOS from 'aos'

const Trending = () => {

   useEffect(() => {
     AOS.init({
       duration: 3000,
     });
   }, []);
  
  const cars = [
    {
      id: "1",
      name: "Toyota Camry",
      year: "2014",
      rentingPrice: 200,
      daily: "day",
      image: `${carImage1}`,
      miles: 125470,
      option: "Rent now",
      condition: "Brand New",
    },

    {
      id: "2",
      name: "Honda Civic",
      year: "2022",
      sellingPrice: 20000,
      image: `${carImage2}`,
      miles: 10000,
      option: "Buy now",
      condition: "Brand New",
    },

    {
      id: "3",
      name: "Bmw X6",
      year: "2021",
      sellingPrice: 50000,
      image: `${carImage3}`,
      miles: 12027,
      option: "Buy now",
      condition: "Brand New",
    },

    {
      id: "4",
      name: "Audi",
      year: "2018",
      rentingPrice: 240,
      image: `${carImage4}`,
      miles: 124530,
      option: "Rent now",
      condition: "Brand New",
    },

    {
      id: "5",
      name: "Nissan Quavo",
      year: "2014",
      sellingPrice: 100000,
      image: `${carImage5}`,
      miles: 11230,
      option: "Buy now",
      condition: "Brand New",
    },

    {
      id: "6",
      name: "Toyota Camry",
      year: "2022",
      sellingPrice: 75000,
      miles: 109870,
      image: `https://atcimages.kbb.com/scaler/408/306/hn/c/de335f71053b4490b582512dc28b9c4a.jpg`,
      option: "Buy Now",
      condition: "Home Used",
    },
  ];
  return (
    <div className="TrendingDiv" id="Trending">
      <div className="trendingText" data-aos='fade-up'>
        <h2 className="trendingTilte">Trending Near You</h2>

        <div className="trendingIcons">
          <AiOutlineArrowLeft className="trendingIconLeft" />
          <AiOutlineArrowRight className="trendingIconRight" />
        </div>
      </div>
      <div className="TrendingContainer">
        {cars.map((car) => (
          <TrendingComponent car={car} key={car.id} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
