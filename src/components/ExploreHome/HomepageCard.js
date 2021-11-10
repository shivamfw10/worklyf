import React from "react";
import "./HomepageCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
function HomepageCard({
  titleName,
  description,
  url,
  arrowColour,
  arrowClass,titleClass
}) {
  return (
    <div className="cardLayout">
      <div className="cardHeader">
        <div>
          <h2 className={titleClass}>{titleName}</h2>
        </div>
        <div className={arrowClass}>
          <i>
            <FontAwesomeIcon icon={faArrowAltCircleRight} color={arrowColour} />
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
