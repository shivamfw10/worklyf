import React from "react";
import "./ExploreChild.css";
function ExploreChild({ sectionName }) {
  return (
    <>
      <div className="circle">
        <div>
          <h2>{sectionName}</h2>
        </div>
      </div>
    </>
  );
}

export default ExploreChild;
