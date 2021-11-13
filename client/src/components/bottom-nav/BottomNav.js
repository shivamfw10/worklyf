import React from "react";
import styles from "./BottomNav.module.css";

import { FiSearch, FiBriefcase, FiGlobe, FiBookOpen } from "react-icons/fi";
import { RiCouponLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function BottomNav() {
  return (
    <div className={styles.navbar}>
      <Link to="/home">
        <div className={styles.link}>
          <FiSearch className={styles.icon} />
          <p className={styles.link_text}>Explore</p>
        </div>
      </Link>
      <Link to="/jobs">
        <div className={styles.link}>
          <FiBriefcase className={styles.icon} />
          <p className={styles.link_text}>Jobs</p>
        </div>
      </Link>
      <Link to="/cards">
        <div className={styles.link}>
          <RiCouponLine className={styles.icon} />
          <p className={styles.link_text}>Work Pass</p>
        </div>
      </Link>
      <Link to="/learn">
        <div className={styles.link}>
          <FiBookOpen className={styles.icon} />
          <p className={styles.link_text}>Learn</p>
        </div>
      </Link>
      <Link to="/home">
        <div className={styles.link}>
          <FiGlobe className={styles.icon} />
          <p className={styles.link_text}>Connect</p>
        </div>
      </Link>
    </div>
  );
}

export default BottomNav;
