import styles from "./Borrow.css";

import { fetchAllItems } from "../api/api";

import { useEffect, useState, useReducer, useCallback } from "react";
import SupplyObjectCard from "../components/SupplyObjectCard";
import FilterForm from "../components/FilterForm";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import EmptyFilteredSuppliesPlaceHolder from "../components/EmptyFilteredSuppliesPlaceholder";

const Borrow = ({ modalDispatch }) => {
  // WHEN YOU CLICK ON ONE DO A SINGLE ITEM SEARCH TO PULL MODAL CARD OF INTERESTED ITEM

  const reducer = (state, action) => {
    switch (action.type) {
      case "LOADED":
        setDataDump(action.payload);
    }
  };

  // NEEDS DEFINE CUT OFF POINT, THEN WHEN SCROLL FAR ENOUGH IT LOADS THE NEXT BATCH OF ITEMS SO ON AND SO ON.
  const [isLoaded, setIsLoaded] = useState(false);

  const [dataDump, setDataDump] = useState([]);
  const [activeFilter, setActiveFilter] = useState(false);
  const [state, dispatch] = useReducer(reducer, { dataFiltered: dataDump });

  useEffect(() => {
    handleLoading()
    return () => {
      console.log("cleared");
    };
  }, []);

  const handleLoading = async () => {
    try {
      await fetchAllItems().then((res) => setDataDump(res.data));
    } catch(e) {
      console.log(e)
    }
    setIsLoaded(true);
  };
  return (
    <section>
      <h1 className="text-5xl text-center my-5">Available Supplies</h1>

      <div className="mx-auto h-fit w-fit my-5">
        <button
          className="p-2 mx-auto"
          onClick={() => setActiveFilter(!activeFilter)}
        >
          <div className="filter-icon h-8 w-8"></div>
        </button>
      </div>
      <div
        className={
          activeFilter
            ? "bg-sky-900 h-44 transition-all overflow-hidden rounded-sm"
            : "h-0 transition-all overflow-hidden"
        }
      >
        <FilterForm handleLoading={handleLoading} dispatch={dispatch} />
      </div>

      {isLoaded ? (
        <div
          className={
            dataDump.length <= 0
              ? "w-full flex flex-col items-center justify-around"
              : "w-full flex flex-wrap items-center justify-start"
          }
        >
          {dataDump.length <= 0 ? (
            <EmptyFilteredSuppliesPlaceHolder />
          ) : (
            dataDump.map((data) => (
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
          background={"bg-black"}
          outerBackground={"bg-white"}
          fontColor={"font-white"}
        />
      )}
    </section>
  );
};

export default Borrow;
