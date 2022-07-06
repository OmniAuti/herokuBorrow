import styles from "./Borrow.css";

import { fetchAllItems } from "../api/api";

import { useEffect, useState, useReducer } from "react";
import DumpObject from "./DumpObject";
import FilterForm from "./FilterForm";

const Borrow = () => {
  // WHEN YOU CLICK ON ONE DO A SINGLE ITEM SEARCH TO PULL MODAL CARD OF INTERESTED ITEM


  const reducer = (state,action) => {
    switch(action.type) {
      case 'LOADED':
      setDataDump(action.payload)
    }
  }

  // NEEDS DEFINE CUT OFF POINT, THEN WHEN SCROLL FAR ENOUGH IT LOADS THE NEXT BATCH OF ITEMS SO ON AND SO ON.

  const [dataDump, setDataDump] = useState([]);
  const [activeFilter, setActiveFilter] = useState(false);
  const [state, dispatch] = useReducer(reducer, {dataFiltered: dataDump})

 

  useEffect(() => {
    fetchAllItems().then((res) => setDataDump(res.data));

    return console.log("cleared");
  }, []);

  return (
    <section>
      <h1 className="text-5xl text-center my-5">Available Supplies</h1>

      <div className="mx-auto h-fit w-fit mt-5">
        <button
          className="p-2 mx-auto"
          onClick={() => setActiveFilter(!activeFilter)}
        >
          <div className="filter-icon h-8 w-8"></div>
        </button>
      </div>
      <div
        className={
          activeFilter ? "border h-24 transition-all overflow-hidden" : "h-0 transition-all overflow-hidden"
        }
      >

       <FilterForm dispatch={dispatch}/>


      </div>

      <div className="w-full flex flex-wrap items-center justify-start">
        {dataDump.map((data) => (
          <DumpObject key={data._id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Borrow;
