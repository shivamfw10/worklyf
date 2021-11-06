import React from "react";
import "./HomepageCard.css";
function HomepageCard({ titleName, description, url }) {
  return (
    <div className="cardLayout">
      <div className="cardHeader">
        <h2 className="cardTitle">{titleName}</h2>

        <i className="fas fa-arrow-alt-circle-right" aria-hidden="true"></i>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <img className="card_image" src={url} alt="idf"></img>
      </div>
    </div>
  );
}

export default HomepageCard;
