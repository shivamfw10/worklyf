import "./App.css";
import Title from "./components/Title";
import HomepageCard from "./components/HomepageCard";
import Explore from "./components/Explore";
import Cards from "./components/Cards";
import Slider from "./components/Slider";
import upcoming from "./components/upcoming";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";
function App() {
  return (
    <>
      // <Slider />
      <Title logoTitle="wl" location="Mumbai"></Title>
      <upcoming></upcoming>

      <HomepageCard
        titleName="Work"
        description="from any corner of the world"
        url="./assets/card1.jpg"
      ></HomepageCard>
      <Explore></Explore>
      <h3 className="happening">Happening Tomorrow</h3>
      <Cards
        imgSrc="./assets/author.jpg"
        cardTitle="Meet your Mentor"
        cardDescription="your personal success coach!"
        btnText="Know More"
      ></Cards>
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
      <h3 className="happening">Happening Next Week</h3>
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
