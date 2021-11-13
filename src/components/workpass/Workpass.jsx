import styles from "./workpass.module.css";
import UpperNav from "../upper_nav/UpperNav";
import BottomNav from "../bottom-nav/BottomNav";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Data from "../../data.json";

const Workpass = () => {
  const { id } = useParams();
  const data = Data[parseInt(id)];

  return (
    <>
      {/* <h1>Select You Daily Pass</h1> */}
      <UpperNav link="/cards" />
      <BottomNav />
      <div className={styles.card_cont}>
        <div className={styles.card}>
          <div className={styles.title}>
            <div className={styles.icon}>
              <BsFillLightningChargeFill />
            </div>
            <div>
              <h1 className={styles.title}>{data.title}</h1>
              <h5>₹ {data.price}</h5>
            </div>
          </div>
          <div className={styles.about}>
            <h4>About</h4>
            <p>{data.about}</p>
          </div>

          <div className={styles.facilities}>
            <h4>Facilities</h4>
            <div className={styles.faci}>
              <img src="./learnAccess.png" alt="" />
              <img src="./co-work.png" alt="" />
              <img src="./globalJobs.png" alt="" />
              <img src="./eventAccess.png" alt="" />
            </div>
          </div>

          <div className={styles.events}>
            <h4>Upcoming Events</h4>
            <div>
              <ul>
                {data.events.map((el) => (
                  <li> • {el}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.reviews}>
            <h4>Reviews</h4>
            <div>
              <ul>
                {data.reviews.map((el) => (
                  <li> {el}</li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/tribe">
            <button className={styles.getbtn}>Get your work pass</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Workpass;
