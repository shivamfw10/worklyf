import styles from "./jobs.module.css";
import UpperNav from "../upper_nav/UpperNav";
import BottomNav from "../bottom-nav/BottomNav";
import { BsArrowRightCircle } from "react-icons/bs";

function Jobs() {
  return (
    <>
      <UpperNav />
      <BottomNav />
      <div className={styles.main}>
        <div className={styles.search}>
          <img src="./search.png" alt="" />
          <img src="./filter.png" alt="" />
        </div>
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

        <div className={styles.facilities}>
          <div className={styles.upperImages}>
            <img src="./hotJobs.png" alt="" />
            <img src="./trending.png" alt="" />
            <img src="./jobsForYou.png" alt="" />
            <img src="./goInternational.png" alt="" />
          </div>
        </div>

        <div className={styles.facilities}>
          <div className={styles.headingDiv}>
            <h4>Jobs For You</h4>
            <p>See All</p>
          </div>
          <div className={styles.faci}>
            <img src="./fb.png" alt="" />
            <img src="./google.png" alt="" />
            <img src="./tesla.png" alt="" />
            <img src="./lg.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;
