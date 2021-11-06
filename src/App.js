import "./App.css";
import Title from "./components/Title";
import HomepageCard from "./components/HomepageCard";
import Explore from "./components/Explore";
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
    </>
  );
}

export default App;
