import React from "react";
import "./HomepageCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
 
} from "@fortawesome/free-solid-svg-icons";
function HomepageCard({ titleName, description, url }) {
  return (
    <div className="cardLayout">
      <div className="cardHeader">
        <div>
          <h2 className="cardTitle">{titleName}</h2>
        </div>
        <div className="rightArrow">
          <i>
            <FontAwesomeIcon icon={faArrowAltCircleRight} color="#e5265a" />
          </i>
        </div>
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
