import styles from "./Team.module.css";
import UpperNav from "../upper_nav/UpperNav";
import BottomNav from "../bottom-nav/BottomNav";

function Team() {
  return (
    <>
      <BottomNav />
      <UpperNav link="/tribe" />
      <div className={styles.cont}>
        <div className={styles.upper}>
          <div className={styles.phone}>
            <img src="./phone.png" alt="" />
          </div>
          <div className={styles.info}>
            <div className={styles.first}>
              <div className={styles.info_left}>
                <div className={styles.number}>
                  <h1>1</h1>
                </div>
                <div className={styles.line}></div>
              </div>
              <div>
                <p>Simply Dial</p>
                <button>022 422 6888</button>
              </div>
            </div>

            <div className={styles.second}>
              <div className={styles.info_left}>
                <div className={styles.number}>
                  <h1>2</h1>
                </div>
                <div className={styles.line}></div>
              </div>
              <div>
                <p>Get a Best Deal for your Team!</p>
              </div>
            </div>

            <div className={styles.second}>
              <div className={styles.info_left}>
                <div className={styles.number}>
                  <h1>3</h1>
                </div>
                <div className={styles.line}></div>
              </div>
              <div>
                <p>Scan and enjoy the Best Work-Life experience </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.or}>
          <h1>Or</h1>
        </div>
        <div className={styles.lower}>
          <h1>Request a call</h1>

          <input type="text" id="name" name="name" placeholder="Name" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Work Email"
          />
          <input
            type="telephone"
            id="phone"
            name="phone"
            placeholder="Phone Number"
          />
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company Name"
          />
          <button className={styles.requestCall}>
            Explore Worklyf Virtual
          </button>
        </div>
      </div>
    </>
  );
}

export default Team;
