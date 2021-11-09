import React from "react";
import "../../App.css";
import Jobs from "../Jobs/Jobs";
import Title from "../Title/Title";
import HomepageCard from "../ExploreHome/HomepageCard";
import Explore from "../ExploreHome/Explore";
import Cards from "../Cards/Cards";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

function Third() {
  return (
    <>
      <Title logoTitle="wl" location="Mumbai"></Title>

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

export default Third;
