import React, {useEffect} from "react";
import "./service.style.scss";
import ServiceImage from "../../assets/service.jpg";
import AOS from 'aos'
import 'aos/dist/aos.css'

const ServiceComponent = () => {
   useEffect(() => {
     AOS.init({
       duration: 3000,
     });
   }, []);
  return (
    <div className="ServiceComponent" id="Service">
      <section class="service__content">
        <div class="service__text" data-aos="fade-up">
          <h1>
            <span>Our </span>Services
          </h1>
          <ol>
            <li>
              <h3>Airport transfert</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque, obcaecati...
              </p>
            </li>
            <li>
              <h3>Special Event</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque, obcaecati...
              </p>
            </li>
            <li>
              <h3>Chauffeur Services</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque, obcaecati... hdyd gygds dgdfghsdtdg
              </p>
            </li>
          </ol>
          <button>Read More</button>
        </div>
        <div className="service__img" data-aos="fade-up">
          <img src={ServiceImage} alt="" />
        </div>
      </section>
    </div>
  );
};

export default ServiceComponent;
