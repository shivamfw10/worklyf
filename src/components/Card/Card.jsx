import styles from "./Card.module.css";
import UpperNav from "../upper_nav/UpperNav";
import BottomNav from "../bottom-nav/BottomNav";
import Data from "../../data.json";
import { Link } from "react-router-dom";

const Card = () => {
  const cardData = (data) => {
    window.localStorage.setItem("card", JSON.stringify(data));
  };

  return (
    <>
      <UpperNav />
      <BottomNav />
      <div className={styles.main}>
        <h1 className={styles.heading}>Select Your Pass</h1>

        {Data.map((data) => (
          <Link to={`Card/${data.id}`}>
            <div className={styles.card} onClick={() => cardData(data)}>
              <div className={styles.details}>
                <h1 className={styles.title}>{data.title}</h1>
                <ul>
                  {data.features.map((el) => (
                    <li className={styles.listItems}> {el}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.duration}>
                <p>{data.duration}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Card;
