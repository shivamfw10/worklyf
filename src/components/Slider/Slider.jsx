import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      alert("hello");
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <>
            <div
              key={obj.id}
              style={
                slideIndex === index + 1
                  ? { background: `${obj.bgcolor}` }
                  : { background: "red" }
              }
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              <img
                style={{
                  position: "relative",
                  zIndex: "-2"
                }}
                src={`./Imgs/img${index + 1}.jpg`}
                alt=""
              />
            </div>
            <div
              // key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
              style={{ top: "15rem", left: "5rem" }}
            >
              <h1
                style={{
                  color: `#ffffff`,
                  fontSize: "48px",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                {obj.title}
              </h1>
              <p
                style={{
                  color: `#ffffff`,
                  fontSize: "24px",
                  marginTop: "-13px"
                }}
              >
                {obj.subTitle}
              </p>
            </div>
          </>
        );
      })}

      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      {/* <BtnSlider moveSlide={prevSlide} direction={"prev"} ></BtnSlider> */}

      <h1 className="h1btn">Skip</h1>

      <div className="container-dots">
        {Array.from({ length: 4 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
