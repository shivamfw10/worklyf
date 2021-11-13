import styles from "./paymentNav.module.css";
import { RiArrowLeftSLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function PaymentNavbar({ link }) {
  return (
    <div className={styles.navbar}>
      <div className={styles.first}>
        <Link className={styles.link} to={link}>
          <RiArrowLeftSLine className={styles.icon} />
        </Link>
        <p className={styles.heading}>Purchase Summary</p>
      </div>
      <div>
        <a className={styles.humburger}>
          <GiHamburgerMenu className={styles.icon} />
        </a>
      </div>
    </div>
  );
}

export default PaymentNavbar;
