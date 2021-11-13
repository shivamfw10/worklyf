import React from "react"; 
import styles_b from "./Homepage.module.css";
import UpperNav from "../upper_nav/UpperNav";
import BottomNav from "../bottom-nav/BottomNav";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <UpperNav />
      <BottomNav />
      <div className={styles_b.main}>
        <div className={styles_b.facilities}>
          <div className={styles_b.upperImages}>
            <img src="./hotJobs.png" alt="" />
            <img src="./trending.png" alt="" />
            <img src="./jobsForYou.png" alt="" />
            <img src="./goInternational.png" alt="" />
          </div>
        </div>

        <Link to={`cards`}>
          <div className={styles_b.work}>
            <div className={styles_b.upper}>
              <div>
                <p className={styles_b.workH}>Work</p>
                <p>From any corner of world</p>
              </div>
              <BsArrowRightCircle className={styles_b.icon} />
            </div>
            <div>
              <img src="./work.png" alt="" />
            </div>
          </div>
        </Link>

        <div className={styles_b.facilities}>
          <h4>Explore WorkLyf</h4>
          <div className={styles_b.faci}>
            <img src="./jobs.png" alt="" />
            <img src="./projects.png" alt="" />
            <img src="./meetups.png" alt="" />
            <img src="./outings.png" alt="" />
          </div>
        </div>

        <div className={styles_b.coming}>
          <h4 className={styles_b.heading}>Coming Soon</h4>
          <div className={styles_b.card}>
            <div>
              <img src="./mentor.png" alt="" />
            </div>
            <div>
              <h1>Meet Your Mentor</h1>
              <p>Your personal success coach!</p>
              <button>Know More</button>
            </div>
          </div>
        </div>

        <div className={styles_b.img}>
          <h4>Happening Tomorrow</h4>
          <img src="./techAndDesign.png" alt="" />
          <img src="./womenInIT.png" alt="" />
        </div>

        <div className={styles_b.img}>
          <h4>Happening Next Week</h4>
          <img src="./cyberMonday.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Homepage;
