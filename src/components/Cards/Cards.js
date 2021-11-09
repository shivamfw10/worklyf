import React from "react";
import "./Cards.css";
function Cards({ cardTitle, cardDescription, btnText, imgSrc }) {
  return (
    <div className="bottomCard">
      <div>
        <img className="btmCardImg" src={imgSrc} />
      </div>
      <div>
        <div>
          <h2>{cardTitle}</h2>
        </div>
        <div>
          <p></p>
          {cardDescription}
        </div>
        <div>
          <button className="btmCardBtn">{btnText}</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
