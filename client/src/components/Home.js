import About from "./About";
import MainSupplyDump from "./MainSupplyDump";
import HeroCOA from "./HeroCOA";
import OurGoal from "./OurGoal";

const Home = ({modalDispatch}) => {
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
