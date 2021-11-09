import React from "react";
import "./Jobs.css";
// import "../App.js";
import Title from "../Title/Title";
import upcoming from "../upcoming";
function Jobs() {
  return (
    <div>
      <Title logoTitle="wl" location="Mumbai"></Title>
      <upcoming></upcoming>
    </div>
  );
}

export default Jobs;
