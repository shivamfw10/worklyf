import React from "react";
import { Link,useHistory} from 'react-router-dom'
import styles from "./worklyf.module.css";
// import { MdKeyboardArrowRight } from "react-icons/md";

function Worklyf() {
  return (
    <>
      <div className={styles.worklyf_section}>
        <div className={styles.upperDiv}>
          <img src="./tagline.png" alt="" />
          <img src="./worklyflogo.png" alt="worklyfLogo" />
        </div>

        <div className={styles.lowerDiv}>
          <button className={styles.btn}><Link to="/register">Sing Up</Link></button>
          <button className={styles.btn}><Link to="/login">Login</Link></button>
          <div>
            <p><Link to="/home">Skip for Now ➝</Link></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Worklyf;
