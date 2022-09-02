import About from "../components/About";
import MainSupplyDump from "../components/MainSupplyDump";
import HeroCOA from "../components/HeroCOA";
import OurGoal from "../components/OurGoal";

const Home = ({ modalDispatch }) => {
  return (
    <>
      <HeroCOA />
      <About />
      <OurGoal />
      <MainSupplyDump modalDispatch={modalDispatch} />
    </>
  );
};

export default Home;
