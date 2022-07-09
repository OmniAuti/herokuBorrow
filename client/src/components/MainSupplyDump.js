import DumpObject from "./DumpObject";
import Loading from "./Loading";

import { useEffect, useState } from "react";
import { fetchAllItems } from "../api/api";

import { Link } from "react-router-dom";

const MainSupplyDump = ({ modalDispatch }) => {
  const [dumpData, setDumpData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [background, setBackground] = useState("bg-sky-900");

  useEffect(() => {
    fetchAllItems().then((res) => setDumpData(res.data));
    setIsLoaded(true);

    return () => {
      console.log("cleared");
    };
  }, []);

  return (
    <section className="mt-24 w-full h-full overflow-hidden px-5 bg-sky-900 rounded-md my-24">
      <h3 className="text-center text-3xl mt-4 font-light">
        Available Supplies In Your Area
      </h3>
      {isLoaded ? (
        <div className="flex items-center justify-around flex-wrap mb-10">
          {dumpData.length <= 0 ? (
            <div className="h-72 mt-10 mx-auto text-center">
              <h2 className="text-2xl my-5 font-light">
                Sorry, there appears to be no one offering supplies in your area
              </h2>
              <p className="text-2xl font-thin">
                Try posting on the{" "}
                <Link
                  to="/ask"
                  className="underline underline-offset-4 hover:underline-offset-1"
                >
                  Ask page
                </Link>{" "}
                to meet your needs
              </p>
            </div>
          ) : (
            dumpData
              .slice(0, 3)
              .map((data) => (
                <DumpObject
                  modalDispatch={modalDispatch}
                  key={data._id}
                  data={data}
                />
              ))
          )}
        </div>
      ) : (
        <Loading background={background} />
      )}
    </section>
  );
};

export default MainSupplyDump;
