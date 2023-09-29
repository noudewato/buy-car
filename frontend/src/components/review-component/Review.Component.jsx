import React, { useEffect } from "react";
import "./review.style.scss";
import ReviewImage1 from "../../assets/Fawaz.jpg";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const ReviewComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  const reviews = [
    {
      id: "1",
      carimage:
        "https://hips.hearstapps.com/hmg-prod/images/2020-toyota-corolla-109-1542230227.jpg",
      carName: "2022 Toyota Corolla",
      des: "",
      clientName: "Fawaz Noudewato",
      clientPosition: "Software Developer",
      clientImage: `${ReviewImage1}`,
    },
    {
      id: "2",
      carimage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgryqfzyGaqLTorpRfN96r7semjhaxIP-dxOnSR98ndqk3qeXpXTmY1RPjTHhqgyg53Sg&usqp=CAU",
      carName: "2020 Mercedes Classe A",
      des: "",
      clientName: "Ingrid Olive",
      clientPosition: "Chief Administrator",
      clientImage: `https://hips.hearstapps.com/cosmopolitan-uk/cm/14/30/53d2e8ef36d78_-_or_c4834a49127064000918710.jpg`,
    },
    {
      id: "3",
      carimage:
        "https://www.carhelpcanada.com/wp-content/uploads/2018/02/2018-honda-accord-sport-2-0t-001-1-678x381.jpg",
      carName: "2018 Honda Accord",
      des: "",
      clientName: "John Doe",
      clientPosition: "Petrom CEO ",
      clientImage: `data:image/jpeg;base64,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`,
    },
  ];
  return (
    <>
      {reviews.map((review) => (
        <div class="review__box" data-aos="fade-up">
          <div class="review__box__img">
            <img
              src={review.carimage}
              alt="dfer"
            />
          </div>
          <div class="review__center">
            <h4>
              {review.carName}
            </h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              neque ut suscipit ipsam quos
            </p>
          </div>

          <div className="revivew__text__bottom">
            <div className="reviewerContent">
              <img src={review.clientImage} alt="my-image" />
              <div className="reviewerInfo">
                <h4>{review.clientName}</h4>
                <p>{review.clientPosition}</p>
              </div>
            </div>

            <div className="reviewIcon">
              <AiFillStar className="star-icon" />
              <AiFillStar className="star-icon" />
              <AiFillStar className="star-icon" />
              <AiFillStar className="star-icon" />
              <BsStarHalf className="star-icon" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ReviewComponent;
