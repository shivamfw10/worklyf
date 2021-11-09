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

function App2() {
  return (
    <>
      <Title logoTitle="wl" location="Mumbai"></Title>
      <upcoming></upcoming>
      <HomepageCard
        titleName="Referrals"
        description="from your friends are just click away"
        url="./assets/card1.jpg"
      ></HomepageCard>
    </>
  );
}

export default App2;
