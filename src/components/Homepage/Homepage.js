import React from "react";
import Title from "../Title/Title";
import HomepageCard from "../ExploreHome/HomepageCard";
import Cards from "../Cards/Cards";
import Explore from "../ExploreHome/Explore";
import { Link } from "react-router-dom";
import "./Homepage.css";
function Homepage() {
  return (
    <div>
      <Title logoTitle="wl" location="Mumbai"></Title>
      <div className="EventsTab">
        <div className="UpcomingQna">
          <div>
            <img src="./assets/Qna.png" alt="" />
          </div>
          <div>Upcoming QnA</div>
        </div>
        <div className="Paid">
          <div>
            <img src="./assets/Rupee.png" alt="" />
          </div>
          <div>Paid Projects</div>
        </div>
        <div className="UpcomingQna">
          <div>
            <img src="./assets/circle.png" alt="" />
          </div>
          <div>Live Events</div>
        </div>
      </div>
      {/*Link here */}
      <Link to="#">
        <HomepageCard
          titleName="Work"
          description="from any corner of the world"
          url="./assets/card1.jpg"
          arrowColour="#e5265a"
          arrowClass="rightArrow"
          titleClass="cardTitle"
        ></HomepageCard>
      </Link>
      <Explore></Explore>
      <h3 className="happening">Happening Tomorrow</h3>
      <Cards
        imgSrc="./assets/author.jpg"
        cardTitle="Meet your Mentor"
        cardDescription="your personal success coach!"
        btnText="Know More"
      ></Cards>
      <Cards
        imgSrc="./assets/TechandDesign.png"
        cardTitle="Tech and Design"
        cardDescription="28th October 2021, 5pm IST"
        btnText="Know More"
      ></Cards>
      <Cards
        imgSrc="./assets/WomenInIt.png"
        cardTitle="Women in It"
        cardDescription="28th October 2021, 5pm IST"
        btnText="Know More"
      ></Cards>
      <h3 className="happening">Happening Next Week</h3>
      <Cards
        imgSrc="./assets/cyberMonday.png"
        cardTitle="Cyber Monday"
        cardDescription="01st November 2021, 5pm IST"
        btnText="Know More"
      ></Cards>{" "}
    </div>
  );
}

export default Homepage;
