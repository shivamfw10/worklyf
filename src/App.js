import "./App.css";
import Jobs from "./components/Jobs/Jobs";
import Title from "./components/Title/Title";
import HomepageCard from "./components/ExploreHome/HomepageCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import Explore from "./components/ExploreHome/Explore";

import upcoming from "./components/upcoming";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";
import Third from "./components/Third/Third";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/Jobsss">
            <Third />
          </Route>
          <Route path="/">
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
            ></Cards>{" "}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
