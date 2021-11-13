import { FiArrowLeft, FiLogOut } from "react-icons/fi";
import {
  BsFillCreditCardFill,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import {
  FaBookmark,
  FaBell,
  FaCalendarAlt,
  FaHeart,
  FaQuestionCircle,
  FaUser,
} from "react-icons/fa";
import styles from "./menu.module.css";

function Menu() {
  return (
    <>
      <div className={styles.menu_cont}>
        <div className={styles.upper_div}>
          <FiArrowLeft />
          <div>
            <h1>Sheetal Sindhu</h1>
            <p>sheetalsindhu@gmail.com</p>
          </div>
        </div>

        <div className={styles.lower_div}>
          <div className={styles.worklyf_div}>
            <h1>My Worklyf</h1>
            <div className={styles.links}>
              <FaBookmark />
              <div>
                <p>Bookmarks</p>
              </div>
            </div>

            <div className={styles.links}>
              <FaCalendarAlt />
              <div>
                <p>Calender</p>
              </div>
            </div>

            <div className={styles.links}>
              <BsFillFileEarmarkTextFill />
              <div>
                <p>Notes</p>
              </div>
            </div>
          </div>

          <div className={styles.account_div}>
            <h1>My Account</h1>
            <div className={styles.links}>
              <FaUser />
              <div>
                <p>Account Details</p>
              </div>
            </div>

            <div className={styles.links}>
              <BsFillCreditCardFill />
              <div>
                <p>Bank and Autopay</p>
              </div>
            </div>

            <div className={styles.links}>
              <FaBell />
              <div>
                <p>Notifications</p>
              </div>
            </div>
          </div>

          <div className={styles.aboutUs_div}>
            <h1>About Us</h1>
            <div className={styles.links}>
              <FaBookmark />
              <div>
                <p>Beta Version</p>
              </div>
            </div>

            <div className={styles.links}>
              <FaHeart />
              <div>
                <p>Our Story</p>
              </div>
            </div>
          </div>

          <div className={styles.aboutUs_div}>
            <h1>Help</h1>

            <div className={styles.links}>
              <FaQuestionCircle />
              <div>
                <p>Help & Support</p>
              </div>
            </div>

            <div className={styles.links}>
              <FiLogOut />
              <div>
                <p>Logout</p>
              </div>
            </div>
          </div>

          <p>worklyf</p>
          <p>App Version v14.47</p>
        </div>
      </div>
    </>
  );
}

export default Menu;
