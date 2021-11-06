import "./App.css";
import Title from "./components/Title";
import HomepageCard from "./components/HomepageCard";

function App() {
  return (
    <>
      <Title logoTitle="wl" location="Mumbai"></Title>
      <HomepageCard
        titleName="Work"
        description="from any corner of the world"
        url="./assets/card1.jpg"
      ></HomepageCard>
    </>
  );
}

export default App;
