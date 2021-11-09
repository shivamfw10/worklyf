import React from "react";
import "./Explore.css";
import ExploreChild from "./ExploreChild";
function Explore() {
  return (
    <>
      <div className="ExploreTitle">
        <h3>Explore Worklyf</h3>
      </div>
      <div className="sections">
        <ExploreChild
          sectionName="Jobs"
          sectionImg="./assets/Vector.png"
        ></ExploreChild>
        <ExploreChild
          sectionName="Projects"
          sectionImg="./assets/Vector1.png"
        ></ExploreChild>
        <ExploreChild
          sectionName="Meetups"
          sectionImg="./assets/Vector3.png"
        ></ExploreChild>
        <ExploreChild
          sectionName="Outings"
          sectionImg="./assets/Vector12.png"
        ></ExploreChild>
      </div>
    </>
  );
}

export default Explore;
