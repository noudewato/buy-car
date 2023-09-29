import React, { useEffect } from "react";
import "./review.scss";
import ReviewComponent from "../../components/review-component/Review.Component";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import AOS from "aos"
import "aos/dist/aos.css"

const Review = () => {
 useEffect(() => {
   AOS.init({
     duration: 3000,
   });
 }, []);

  return (
    <div className="Review">
      <div className="reviewHeader" data-aos='fade-up'>
        <h2 className="reviewTilte">Our Client</h2>

        <div className="reviewIcons">
          <AiOutlineArrowLeft className="reviewIconLeft" />
          <AiOutlineArrowRight className="reviewIconRight" />
        </div>
      </div>

      <div className="reviewContainer">
        <ReviewComponent />
      </div>
    </div>
  );
};

export default Review;
