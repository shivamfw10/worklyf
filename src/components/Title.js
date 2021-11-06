import React from "react";

import "./Title.css";
function Title({ logoTitle, location }) {
  return (
    <>
      {" "}
      <div className="header">
        <h1 className="Logo">{logoTitle}</h1>
        <div>
          <h2>{location}</h2>
        </div>
        <div className="threedot">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </>
  );
}

export default Title;
