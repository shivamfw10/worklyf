import React from "react";
import "./Explore.css";
import ExploreChild from "./ExploreChild";
function Explore() {
  return (
    <>
      <div className="ExploreTitle">
        <h2>Explore Worklyf</h2>
      </div>
      <div className="sections">
        <ExploreChild sectionName="Jobs"></ExploreChild>
        <ExploreChild sectionName="Projects"></ExploreChild>
        <ExploreChild sectionName="Meetups"></ExploreChild>
        <ExploreChild sectionName="Outings"></ExploreChild>
      </div>
    </>
  );
}

export default Explore;
