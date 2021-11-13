import React from "react";
import { Link } from "react-router-dom";
import styles from "./thankyou.module.css";

function Thankyou() {
  return (
    <>
      <div className={styles.thanku_div}>
        <div className={styles.wrapper}>
          <svg
            className={styles.checkmark}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className={styles.checkmark__circle}
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className={styles.checkmark__check}
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>
        <div className={styles.message}>
          {/* <img
          src="https://cdn.dribbble.com/users/1751799/screenshots/5512482/media/1cbd3594bb5e8d90924a105d4aae924c.gif"
          alt=""
        /> */}
          <h1>Thank you for your response!</h1>
          <p>Our Customer Care Team will soon get in touch with you.</p>

          <button className={styles.exploreBtn}><Link to="/home">Explore Worklyf Virtual</Link></button>
        </div>
      </div>
    </>
  );
}

export default Thankyou;
