import styles from "./Homepage.module.css";
import UpperNav from "../upper_nav/UpperNav";
import BottomNav from "../bottom-nav/BottomNav";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <UpperNav />
      <BottomNav />
      <div className={styles.main}>
        <div className={styles.facilities}>
          <div className={styles.upperImages}>
            <img src="./hotJobs.png" alt="" />
            <img src="./trending.png" alt="" />
            <img src="./jobsForYou.png" alt="" />
            <img src="./goInternational.png" alt="" />
          </div>
        </div>

        <Link to={`cards`}>
          <div className={styles.work}>
            <div className={styles.upper}>
              <div>
                <p className={styles.workH}>Work</p>
                <p>From any corner of world</p>
              </div>
              <BsArrowRightCircle className={styles.icon} />
            </div>
            <div>
              <img src="./work.png" alt="" />
            </div>
          </div>
        </Link>

        <div className={styles.facilities}>
          <h4>Explore WorkLyf</h4>
          <div className={styles.faci}>
            <img src="./jobs.png" alt="" />
            <img src="./projects.png" alt="" />
            <img src="./meetups.png" alt="" />
            <img src="./outings.png" alt="" />
          </div>
        </div>

        <div className={styles.coming}>
          <h4 className={styles.heading}>Coming Soon</h4>
          <div className={styles.card}>
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

        <div className={styles.img}>
          <h4>Happening Tomorrow</h4>
          <img src="./techAndDesign.png" alt="" />
          <img src="./womenInIT.png" alt="" />
        </div>

        <div className={styles.img}>
          <h4>Happening Next Week</h4>
          <img src="./cyberMonday.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Homepage;
