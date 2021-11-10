import React from "react";
import "./Jobs.css";

import Title from "../Title/Title";
import HomepageCard from "../ExploreHome/HomepageCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Jobs() {
  return (
    <div>
      <Title logoTitle="wl" location="Mumbai"></Title>
      <div className="SearchAndEllipse">
        <div>
          <FontAwesomeIcon icon={faSearch} className="SearchBar" />
          <input
            type="text"
            placeholder="Search for Interesting Topics"
            className="interestingTopics"
          />
        </div>
        <div className="rightEllipse">
          <img src="./assets/Capsule.png" alt="" />
        </div>
      </div>

      <HomepageCard
        titleName="Referrals"
        description="from any corner of the world"
        url="./assets/card1.jpg"
        arrowColour="#3A44A1"
        arrowClass="rightArrow"
        titleClass="cardTitle"
      ></HomepageCard>
      <div className="EventsTab">
        <div className="UpcomingQna">
          <div>
            <img src="./assets/Flame.png" alt="" />
          </div>
          <div>Hot Jobs</div>
        </div>
        <div className="Paid">
          <div>
            <img src="./assets/Trending.png" alt="" />
          </div>
          <div>Trending Now</div>
        </div>
        <div className="UpcomingQna">
          <div>
            <img src="./assets/forYou.png" alt="" />
          </div>
          <div>Jobs For You</div>
        </div>
      </div>
      <div className="JobsforYou">
        <div>
          <h4>Jobs For You</h4>
        </div>
        <div>
          <p className="SeeMore">See More</p>
        </div>
      </div>
      <div className="JobsForYouOuter">
        <div className="JobsForYouInner">
          <img src="./assets/Facebook.png" alt="" />
          <div>
            <h5>Lead Data Scientist</h5>
            <small>Facebook</small>
          </div>
        </div>
        <div className="JobsForYouInner">
          <img src="./assets/Google.png" alt="" />
          <div>
            <h5>Sr. Data Analyst</h5>
            <small>Google</small>
          </div>
        </div>
        <div className="JobsForYouInner">
          <img src="./assets/Tesla.png" alt="" />
          <div>
            <h5>Interface Designer</h5>
            <small>Tesla Motors</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
