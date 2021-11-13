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
          <button className={styles.btn}>Sign Up</button>
          <button className={styles.btn}>Login</button>
          <div>
            <p>Skip for Now ➝</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Worklyf;
