import React from "react";
import UpperNav from "../upper_nav/UpperNav";
import BottomNav from "../bottom-nav/BottomNav";
import styles from "./tribe.module.css";
import { Link } from "react-router-dom";

function Tribe() {
  return (
    <>
      <UpperNav />
      <BottomNav />
      <div className={styles.tribe_div}>
        <h4>New To Our Tribe?</h4>
        <div className={styles.team_div}>
          <Link to="/payment">
            <div className={styles.tribe}>
              <img src="./solo.png" alt="solo" />
              <p> Joining solo</p>
            </div>
          </Link>

          <Link to="/team">
            <div className={styles.tribe}>
              <img src="./team.png" alt="team" />
              <p>With a team</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Tribe;
