import React from "react";
import "./App.css";
import Jobs from "./components/Jobs/Jobs";
import Title from "./components/Title/Title";
import HomepageCard from "./components/Explore_Home/HomepageCard";
import Explore from "./components/Explore_Home/Explore";
import Cards from "./components/Cards/Cards";

import upcoming from "./components/upcoming";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

function App3() {
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

export default App3;
