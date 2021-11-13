import React from "react";
import { FiArrowLeft, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
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
import axios from "axios";

function Menu() {
  const auth = useSelector(state => state.auth)
    const {user,email, isLogged} = auth
    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/home";
        } catch (err) {
            window.location.href = "/home";
        }
    }

    const userLink = () => {
      return (
        <>
        <div className={styles.menu_cont}>
        <div className={styles.upper_div}>
          <Link to="/home"><FiArrowLeft /></Link>
          <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
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
                <p><Link to="/main" onClick={handleLogout}>Logout</Link></p>
              </div>
            </div>
          </div>

          <p>worklyf</p>
          <p>App Version v14.47</p>
        </div>
      </div>
        </>
      )
        
    }
    const transForm = {
      transform: isLogged ? "translateY(-5px)" : 0
  }


  return (
    <>
      <ul style={transForm}>
          {/* <li><Link to="/"><i className="fas fa-shopping-cart"></i> Cart</Link></li> */}
          {
              isLogged
              ? userLink()
              : <div className={styles.menu_cont}>
              <div className={styles.upper_div}>
                <Link to="/home"><FiArrowLeft /></Link>
                <div>
                  <h1>{user.name}</h1>
                  <p>{user.email}</p>
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
                      <p><Link to="/login">Sign in</Link></p>
                    </div>
                  </div>
                </div>
      
                <p>worklyf</p>
                <p>App Version v14.47</p>
              </div>
            </div>
              //window.location.href="/home"
              // <li><Link to="/login"><i className="fas fa-user"></i> Sign in</Link></li>
          }
      </ul>

      
    </>
  );
}

export default Menu;
