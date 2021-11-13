import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
export const ReactCarsual = () => {
  return (
    <div style={{ width: "375px", height: "812px", margin: "auto" }}>
      <Carousel labels={""}>
        <div renderArrowPrev={false}>
          <img
            style={{ opacity: "0.2" }}
            src="https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F.jpg"
            alt="Slide1"
          />
          <p style={{ position: "relative", bottom: "13rem" }}>Hello</p>
        </div>
        <div renderArrowPrev={false}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7meVHtRmN9_c0cbxIK9FlohhuRclf493Ho749_atKfEh9umK6JQPHhg6c9At5YrKGSAE&usqp=CAU"
            alt="Slide2"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHLLiamn01KPNigPN4NDFESd7ajkExuDCH9xX7Zv7nOw77kATr2E-irfU1abZgwRS-KLA&usqp=CAU"
            alt="Slide3"
          />
          <p className="legend">Legend 3</p>
          <button
            type="button"
            aria-label="next slide / item"
            class="control-arrow control-next"
          ></button>
        </div>
      </Carousel>
    </div>
  );
};
