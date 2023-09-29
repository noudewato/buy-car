import React, { useEffect } from "react";
import "./footer.scss";
import AOS from "aos"
import 'aos/dist/aos.css'
const Footer = () => {

    useEffect(() => {
      AOS.init({
        duration: 3000,
      });
    }, []);
  return (
    <div className="Footer">
      <div className="footerContainer">
        <div className="footerContent">
          <div className="singlrFooterGrid" data-aos="fade-up">
            <span className="footerTitle">About</span>

            <ul className="footerUl">
              <li className="footerLi">How it works</li>
              <li className="footerLi">Careers</li>
              <li className="footerLi">Affiliates</li>
              <li className="footerLi">Media</li>
            </ul>
          </div>
          <div className="singlrFooterGrid" data-aos="fade-up">
            <span className="footerTitle">Become a seller</span>

            <ul className="footerUl">
              <li className="footerLi">Add Vehicles</li>
              <li className="footerLi">Resources Center</li>
              <li className="footerLi">Realeas Date</li>
              <li className="footerLi">Bonds</li>
            </ul>
          </div>

          <div className="singlrFooterGrid" data-aos="fade-up">
            <span className="footerTitle">Community</span>

            <ul className="footerUl">
              <li className="footerLi">Recommendation</li>
              <li className="footerLi">Gift Cards</li>
              <li className="footerLi">Top Ups</li>
              <li className="footerLi">Selling</li>
            </ul>
          </div>

          <div className="singlrFooterGrid" data-aos="fade-up">
            <span className="footerTitle">Booking Support</span>

            <ul className="footerUl">
              <li className="footerLi">Updates for covid-19</li>
              <li className="footerLi">Helps Center</li>
              <li className="footerLi">Garages</li>
              <li className="footerLi">Trust & Safety</li>
            </ul>
          </div>
        </div>
        <div className="footerLower">
          <p>2023 All rigth reserved</p>
          <blockquote>Fawaz Noudewato</blockquote>
        </div>
      </div>
    </div>
  );
};

export default Footer;
