import React from "react";
import "./ExploreChild.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
function ExploreChild({ sectionName }) {
  return (
    <>
      <div className="circle">
        <div></div>
        <div>
          <h2>{sectionName}</h2>
        </div>
      </div>
    </>
  );
}

export default ExploreChild;
