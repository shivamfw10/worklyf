import styles from "./learn.module.css";
import UpperNav from "../upper_nav/UpperNav";
import BottomNav from "../bottom-nav/BottomNav";

function Learn() {
  return (
    <>
      <UpperNav />
      <BottomNav />
      <div className={styles.main}>
        <div className={styles.search}>
          <img src="./search.png" alt="" />
          <img src="./filter.png" alt="" />
        </div>

        <div className={styles.img}>
          <h4 className={styles.heading}>Happening Now</h4>
          <img src="./techAndDesign.png" alt="" />
          <img src="./womenInIT.png" alt="" />
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
      </div>
    </>
  );
}

export default Learn;
