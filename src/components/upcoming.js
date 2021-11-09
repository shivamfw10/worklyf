import React from "react";
import "./Upcoming.css";
function upcoming({ cardName, cardImage }) {
  return (
    <div className="CardLayout">
      <div>
        <img src={cardImage} />
      </div>
      <div>
        <h3>{cardName}</h3>
      </div>
    </div>
  );
}

export default upcoming;
