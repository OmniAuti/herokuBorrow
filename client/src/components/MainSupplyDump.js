import SupplyObjectCard from "./SupplyObjectCard";
import Loading from "./Loading";
import EmptySuppliesPlaceHolder from "./EmptySuppliesPlaceholder";

import { useCallback, useEffect, useState } from "react";
import { fetchAllItems } from "../api/api";

const MainSupplyDump = ({ modalDispatch }) => {
  const [dumpData, setDumpData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      fetchAllItems().then((res) => setDumpData(res.data));
      handleLoad();
    } catch (e) {
      console.log(e);
    }
    return () => {
      console.log("cleared");
    };
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, [dumpData]);

  return (
    <section className="mt-24 w-full h-full overflow-hidden px-5 bg-sky-900 rounded-md my-24">
      <h3 className="text-center text-3xl mt-4 font-light">
        Available Supplies In Your Area
      </h3>
      {isLoaded ? (
        <div className="flex items-center justify-around flex-wrap mb-10">
          {dumpData.length <= 0 ? (
            <EmptySuppliesPlaceHolder />
          ) : (
            dumpData
              .slice(0, 3)
              .map((data) => (
                <SupplyObjectCard
                  modalDispatch={modalDispatch}
                  key={data._id}
                  data={data}
                />
              ))
          )}
        </div>
      ) : (
        <Loading
          background={"bg-sky-900"}
          fontColor={"text-white"}
          outerBackground={"bg-white"}
        />
      )}
    </section>
  );
};

export default MainSupplyDump;
