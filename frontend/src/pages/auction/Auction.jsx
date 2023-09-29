import React, { useEffect } from "react";
import "./auction.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import carImage1 from "../../assets/toyota-camry.webp";
import carImage2 from "../../assets/civic.jpg";
import carImage3 from "../../assets/bmw.jpg";
import AuctionComponent from "../../components/auction-component/Auction.Component.jsx";
import "aos/dist/aos.css";
import AOS from "aos";

const Auction = () => {
  const auctionCars = [
    {
      id: "1",
      name: "Chevrolet Equinox",
      year: "2017",
      sellingPrice: 20000,
      daily: "day",
      image: `https://cs.copart.com/v1/AUTH_svc.pdoc00001/HPX94/4c8571c8-b8b3-47ac-b1bc-eaee243e2e47.JPG`,
      miles: 150000,
      option: "Buy now",
      condition: "Home Used",
    },

    {
      id: "2",
      name: "Honda Accord",
      year: "2018",
      sellingPrice: 120000,
      image: `https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/d9b636c2ec84ddc3bc7f2eb32861b39bdd5f9683/photos/rN08w4O5-4ClHs0goOl-(edit).jpg?t=168444506678`,
      miles: 1570000,
      option: "Buy now",
      condition: "Home Used",
    },

    {
      id: "3",
      name: "Rang Rover",
      year: "2016",
      sellingPrice: 120000,
      image: `https://cs.copart.com/v1/AUTH_svc.pdoc00001/lpp/0823/297de5165eac4dc9b697e30c49682e7b_hrs.jpg`,
      miles: 1570000,
      option: "Buy now",
      condition: "Home Used",
    },

    {
      id: "4",
      name: "Mercedes-Benz G",
      year: "2004",
      sellingPrice: 50000,
      image: `https://copart-images.inloher.com/v1/AUTH_svc.pdoc00001/lpp/0823/e5b5f355c59f47a881d961f5d111d69d_hrs.jpg`,
      miles: 198000,
      option: "Buy now",
      condition: "Home Used",
    },

    {
      id: "5",
      name: "Toyota Avalon",
      year: "2014",
      sellingPrice: 5000,
      image: `https://cs.copart.com/v1/AUTH_svc.pdoc00001/LPP141/93b0b9e09f8542ada6d0b7353d24faea_hrs.jpg`,
      miles: 98000,
      option: "Buy now",
      condition: "Home Used",
    },

    {
      id: "6",
      name: "Lexus SUV",
      year: "2019",
      sellingPrice: 105000,
      image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvSlITp3hIPXuY6A8cOlesnaCyVPbDgqKfg&usqp=CAU`,
      miles: 298000,
      option: "Buy now",
      condition: "Home Used",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="AuctionDiv" id="Auction">
      <div className="AuctionText" data-aos="fade-up">
        <h2 className="AuctionTilte">Auction Car</h2>

        <div className="AuctionIcons">
          <AiOutlineArrowLeft className="AuctionIconLeft" />
          <AiOutlineArrowRight className="AuctionIconRight" />
        </div>
      </div>
      <div className="AuctionContainer">
        {auctionCars.map((car) => (
          <AuctionComponent car={car} key={car.id} />
        ))}
      </div>
    </div>
  );
};

export default Auction;
