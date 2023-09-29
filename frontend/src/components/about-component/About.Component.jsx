import React, {useEffect} from 'react'
import "./about.style.scss"
import AboutImage from "../../assets/about.jpg"
import AOS from 'aos'
 import "aos/dist/aos.css"
const AboutComponent = () => {

  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="AboutComponent" id='About'>
      <section class="about">
        <div class="about__img" data-aos="fade-up">
          <img src={AboutImage} alt="" />
        </div>

        <div class="about__text" data-aos="fade-up">
          <h1>
            About <span>Us</span>
          </h1>
          <h1>More than 50+ special collection car for rent</h1>
          <p>
            Get the car of your dream with special installments of your choice.
            There are <span>various attractive</span> offers from Madina through
            our collaboration wiyh various trusted leasing partners{" "}
          </p>

          <button>Read More</button>
        </div>
      </section>
    </div>
  );
}

export default AboutComponent
