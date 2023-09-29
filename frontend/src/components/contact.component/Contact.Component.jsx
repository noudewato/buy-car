import React, { useEffect } from "react";
import "./contact.style.scss";
import { BiCurrentLocation, BiLogoGmail } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import AOS from 'aos'
import 'aos/dist/aos.css'

const ContactComponent = () => {
    useEffect(() => {
      AOS.init({
        duration: 3000,
      });
    }, []);
  return (
    <div>
      <div class="ContactComponent">
        <section class="address">
          <div class="address__content">
            <div class="address__box" data-aos="fade-up">
              <BiCurrentLocation className="i loc" />
              <div class="address__text">
                <h4>Address</h4>
                <p>
                  Lorem ipsum dolor sit amet conse <br /> ctetur adipisicing
                  elit. Assumenda, qui!
                </p>
              </div>
            </div>
            <div class="address__box" data-aos="fade-up">
              <BsFillTelephoneFill className="i phone" />
              <div class="address__text">
                <h4>Telephone</h4>
                <h4>
                  Phone: <span class="number">+233550601470</span>
                </h4>
                <h4>
                  Whatsapp: <span class="number">+233550601470</span>
                </h4>
              </div>
            </div>
            <div class="address__box" data-aos="fade-up">
              <BiLogoGmail className="i mail" />
              <div class="address__text">
                <h4>Email</h4>
                <p>noudewatofawaz7@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactComponent;
