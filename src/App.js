import "./App.css";
import Title from "./components/Title";
import HomepageCard from "./components/HomepageCard";
import Explore from "./components/Explore";
import Cards from "./components/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      <Title logoTitle="wl" location="Mumbai"></Title>
      <HomepageCard
        titleName="Work"
        description="from any corner of the world"
        url="./assets/card1.jpg"
      ></HomepageCard>
      <Explore></Explore>
      <h3>Happening Tomorrow</h3>
      <Cards
        imgSrc="./assets/TechandDesign.png"
        cardTitle="Tech and Design"
        cardDescription="28th October 2021, 5pm IST"
        btnText="Know More"
      ></Cards>
      <Cards
        imgSrc="./assets/WomenInIt.png"
        cardTitle="Women in It"
        cardDescription="28th October 2021, 5pm IST"
        btnText="Know More"
      ></Cards>
      <Cards
        imgSrc="./assets/cyberMonday.png"
        cardTitle="Cyber Monday"
        cardDescription="01st November 2021, 5pm IST"
        btnText="Know More"
      ></Cards>
    </>
  );
}

export default App;
