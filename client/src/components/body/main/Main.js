import React from 'react'
import { Link,useHistory} from 'react-router-dom'
import styles_a from "./main.module.css";
// import home from "../../../../public/home.png"
function Home() {
    return (
        <>
          {/* <div className={styles_a.worklyf_section} styles_a={{ backgroundImage:`url(${home})` }}> */}
            <div className={styles_a.worklyf_section}>
            <div className="">
              <h4 className={styles_a.upper_p}>jobs . co-work . learn</h4>
              <h1 className={styles_a.below_p}>{'<worklyf>'}</h1>
            </div>
    ​
            <div className={styles_a.lower_div}>
              <button className={styles_a.btn_signup}><Link to="/register">Sing Up</Link></button>
              <button className={styles_a.btn_login}><Link to="/login">Login</Link></button>
              <div className={styles_a.skip_div}>
                <Link className={styles_a.skip_p} to="/home">Skip it for Now &rarr;</Link>
              </div>
            </div>
          </div>
        </>
      );
}

export default Home
