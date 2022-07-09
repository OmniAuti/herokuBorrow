import styles from "./Borrow.css";

import { fetchAllItems } from "../api/api";

import { useEffect, useState, useReducer } from "react";
import DumpObject from "./DumpObject";
import FilterForm from "./FilterForm";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Borrow = ({modalDispatch}) => {
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
  const [background, setBackground] = useState('bg-black')

  useEffect(() => {
    fetchAllItems().then((res) => setDataDump(res.data));
    setIsLoaded(true);
    return () => {
      console.log("cleared");
    };
  }, []);

  const handleLoading = (Boolean) => {
    setIsLoaded(Boolean);
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
            <>
              <h2 className="text-2xl mt-10 text-center">
                Oops! There seems to be no supplies that are in your area or
                that match your search
              </h2>
              <div className="empty-borrow-array-binoc mt-5"></div>
              <p className="font-thin text-2xl mb-5">
                Expand your filters and try again
              </p>
              <p className="text-2xl font-thin mb-5">
                Or try posting on the{" "}
                <Link
                  to="/ask"
                  className="underline underline-offset-4 hover:underline-offset-1"
                >
                  Ask page
                </Link>{" "}
                to meet your needs
              </p>
            </>
          ) : (
            dataDump.map((data) => <DumpObject modalDispatch={modalDispatch} key={data._id} data={data} />)
          )}
        </div>
      ) : (
        <Loading background={background}/>
      )}
    </section>
  );
};

export default Borrow;
