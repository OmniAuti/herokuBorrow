import { filteredQuery } from "../api/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FilterForm = ({ dispatch }) => {
  const navigate = useNavigate();
  const [filterQuery, setFilterQuery] = useState({
    type: "",
    quantity: "",
    condition: "",
    location: "",
    zipcode: "",
  });
  const [dataDump, setDataDump] = useState([]);

  // THEN FILTERS COMPONET

  const handleQuery = async (e) => {
    e.preventDefault();

    await filteredQuery(filterQuery)
      .then((res) => setDataDump(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch({ type: "LOADED", payload: dataDump });

    return () => {
      console.log("cleared Filter");
    };
  }, [dataDump]);

  return (
    <form
      className="text-black flex flex-col items-center"
      onSubmit={(e) => handleQuery(e)}
    >
      <div className="text-black flex justify-around items-center w-full mt-2">
        <div>
          <label className="mx-2" htmlFor="type">
            Type of supplies
          </label>
          <select
            className="text-black"
            id="type"
            value={filterQuery.type}
            onChange={(e) =>
              setFilterQuery({ ...filterQuery, type: e.target.value })
            }
          >
            {" "}
            <option value="">Select Type</option>
            <option value=""></option>
            <option value="pencil">Pencil</option>
            <option value="pen">Pen</option>
            <option value="ruler">Ruler</option>
            <option value="protractor">Protractor</option>
            <option value="notebook">Notebook</option>
            <option value="graphing paper">Graphing Paper</option>
            <option value="colored paper">Colored Paper</option>
            <option value="notecard/flashcard">Notecard/Flashcard</option>
            <option value="sticky note">Sticky Note</option>
            <option value="folder">Folder</option>
            <option value="binder">Binder</option>
            <option value="backpack">Backpack</option>
            <option value="pencil pouch/case">Pencil Pouch/Case</option>
            <option value="lunchbox">Lunchbox</option>
            <option value="highlighter">Highlighter</option>
            <option value="marker">Marker</option>
            <option value="colored pencil">Colored Pencil</option>
            <option value="crayon">Crayon</option>
            <option value="calculator">Calculator</option>
          </select>
        </div>
        <div>
          <label className="mx-2" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="text-black"
            id="quantity"
            value={filterQuery.quantity}
            onChange={(e) =>
              setFilterQuery({
                ...filterQuery,
                quantity: Number(e.target.value),
              })
            }
            type="number"
            name="quantity"
            max="999"
            min="0"
          />
        </div>
        <div>
          <label className="mx-2" htmlFor="condition">
            Condition
          </label>
          <select
            className="text-black"
            id="condition"
            value={filterQuery.condition}
            onChange={(e) =>
              setFilterQuery({ ...filterQuery, condition: e.target.value })
            }
          >
            {" "}
            <option value="">
              Select Condition
            </option>
            <option value=""></option>
            <option value="new">New</option>
            <option value="slightly used">Slightly Used</option>
            <option value="moderately used">Moderately Used</option>
            <option value="heavily used">Heavily Used</option>
          </select>
        </div>
        <div>
          <label className="mx-2" htmlFor="location">
            Location
          </label>
          <input
            className="text-black"
            id="location"
            value={filterQuery.location}
            onChange={(e) =>
              setFilterQuery({ ...filterQuery, location: e.target.value })
            }
            type="text"
            name="location"
            maxLength="49"
            placeholder="Location"
          />
        </div>
        <div>
          <label className="mx-2" htmlFor="zipcode">
            Zipcode
          </label>
          <input
            className="text-black"
            id="zipcode"
            value={filterQuery.zipcode}
            onChange={(e) =>
              setFilterQuery({ ...filterQuery, zipcode: e.target.value })
            }
            type="text"
            pattern="[0-9]{5}"
            maxLength="5"
            name="zipcode"
            placeholder="Zipcode"
          />
        </div>
      </div>
      <button className="text-white border px-5 py-2 m-2 mx-auto w-24">
        Submit
      </button>
    </form>
  );
};

export default FilterForm;
