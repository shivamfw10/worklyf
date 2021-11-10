import React from "react";
import "../../App.css";
import "./Learn.css";
import Title from "../Title/Title";
import Cards from "../Cards/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Learn() {
  return (
    <>
      <Title logoTitle="wl" location="Mumbai"></Title>
      <div className="SearchAndEllipse">
        <div>
          <FontAwesomeIcon icon={faSearch} className="SearchBar" />
          <input
            type="text"
            placeholder="Search for Interesting Topics"
            className="interestingTopics"
          />
        </div>
        <div className="rightEllipse">
          <img src="./assets/Capsule.png" alt="" />
        </div>
      </div>
      <small></small>

      <Cards
        imgSrc="./assets/TechandDesign.png"
        cardTitle="Tech and Design"
        cardDescription="28th October 2021, 5pm IST"
        btnText="Know More"
      ></Cards>
      <Cards
        imgSrc="./assets/WomenInIt.png"
        cardTitle="Women in It"
        cardDescription="28th October 2021, 5pm IST"
        btnText="Know More"
      ></Cards>
      <h3 className="happening">Coming Soon</h3>
      <Cards
        imgSrc="./assets/author.jpg"
        cardTitle="Meet your Mentor"
        cardDescription="your personal success coach!"
        btnText="Know More"
      ></Cards>
    </>
  );
}

export default Learn;
