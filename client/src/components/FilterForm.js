import { filteredQuery } from "../api/api";
import { useState } from "react";

const FilterForm = ({ handleFilterForm, handlePostFailure }) => {
  const [filterQuery, setFilterQuery] = useState({
    type: "",
    quantity: "",
    condition: "",
    location: "",
    zipcode: "",
    photoFilter: false,
  });

  // THEN FILTERS COMPONET

  const handleQuantitiy = (e) => {
    if (e.target.value.length > 3) return;
    setFilterQuery({ ...filterQuery, quantity: e.target.value });
  };

  const handleQuery = async (e) => {
    e.preventDefault();
    try {
      await filteredQuery(filterQuery)
        .then((res) => {
          if (filterQuery.photoFilter === true) {
            handleFilterForm(res.data.filter((item) => item.photoInfo.url !== ""));
          } else if (filterQuery.photoFilter === false) {
            handleFilterForm(res.data);
          }
        })
    } catch (e) {
      handlePostFailure(e);
      console.log(e);
    }
  };

  const handleReset = async (e) => {
    e.preventDefault()
    try {
      const clearedSearch = {
        type: "",
        quantity: "",
        condition: "",
        location: "",
        zipcode: "",
        photoFilter: false,
      };
      setFilterQuery(clearedSearch);
      await filteredQuery(clearedSearch).then((res) => handleFilterForm(res.data))
    } catch (e) {
      handlePostFailure(e)
      console.log(e);
    }
  };

  return (
    <form
      className="text-black flex w-full md:w-1/2 lg:w-full mx-auto flex-col items-center"
      onSubmit={(e) => handleQuery(e)}
    >
      <div className="text-black flex flex-col lg:flex-row justify-around items-center w-full mt-2">
        <div className="flex flex-col items-center w-3/4 lg:w-fit justify-around">
          <label className="my-2 text-xl" htmlFor="type">
            Type Of Supplies
          </label>
          <select
            className="text-black text-2xl w-full text-center lg:w-11/12 rounded-sm"
            id="type"
            value={filterQuery.type}
            onChange={(e) =>
              setFilterQuery({ ...filterQuery, type: e.target.value })
            }
          >
            {" "}
            <option value="">Looking for a . . .</option>
            <option value="pencil">Pencil</option>
            <option value="pen">Pen</option>
            <option value="ruler">Ruler</option>
            <option value="protractor">Protractor</option>
            <option value="notebook">Notebook</option>
            <option value="journal">Journal</option>
            <option value="graphing paper">Graphing Paper</option>
            <option value="colored paper">Colored Paper</option>
            <option value="notecard">Notecards</option>
            <option value="flashcard">Flashcards</option>
            <option value="miscellaneous study material">
              Miscellaneous Study Material
            </option>
            <option value="sticky note">Sticky Note</option>
            <option value="folder">Folder</option>
            <option value="binder">Binder</option>
            <option value="backpack">Backpack/Bookbag</option>
            <option value="pencil pouch/case">Pencil Pouch/Case</option>
            <option value="lunchbox">Lunchbox</option>
            <option value="highlighter">Highlighter</option>
            <option value="marker">Marker</option>
            <option value="colored pencil">Colored Pencil</option>
            <option value="crayon">Crayon</option>
            <option value="paint brush">Paint Brush</option>
            <option value="calculator">Calculator</option>
            <option value="book">Book</option>
            <option value="miscellaneous books">Miscellaneous Books</option>
          </select>
        </div>
        <div className="flex flex-col items-center justify-around w-3/4 lg:w-fit">
          <label className="my-2 text-xl" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="text-black w-full  text-center lg:w-11/12 text-2xl rounded-sm"
            id="quantity"
            value={filterQuery.quantity}
            onChange={(e) => handleQuantitiy(e)}
            type="number"
            name="quantity"
            max="999"
            min="0"
            maxLength={3}
            placeholder="1"
          />
        </div>
        <div className="flex flex-col items-center justify-around w-3/4 lg:w-fit">
          <label className="my-2 text-xl" htmlFor="condition">
            Condition
          </label>
          <select
            className="text-black w-full text-center  lg:w-11/12 text-2xl rounded-sm"
            id="condition"
            value={filterQuery.condition}
            onChange={(e) =>
              setFilterQuery({ ...filterQuery, condition: e.target.value })
            }
          >
            {" "}
            <option value="">How Used?</option>
            <option value="New">New</option>
            <option value="Slightly Used">Slightly Used</option>
            <option value="Moderately Used">Moderately Used</option>
            <option value="Heavily Used">Heavily Used</option>
          </select>
        </div>
        <div className="flex flex-col items-center justify-around w-3/4 lg:w-fit">
          <label className="my-2 text-xl" htmlFor="location">
            General Location
          </label>
          <input
            className="text-black text-center w-full lg:w-11/12 text-2xl rounded-sm "
            id="location"
            value={filterQuery.location}
            onChange={(e) =>
              setFilterQuery({ ...filterQuery, location: e.target.value })
            }
            type="text"
            name="location"
            maxLength="49"
            placeholder="Somewhere City"
          />
        </div>
        <div className="flex flex-col  items-center justify-around w-3/4 lg:w-fit">
          <label className="my-2 text-xl" htmlFor="zipcode">
            Zipcode
          </label>
          <input
            className="text-black text-center w-full text-2xl rounded-sm "
            id="zipcode"
            value={filterQuery.zipcode}
            onChange={(e) =>
              setFilterQuery({ ...filterQuery, zipcode: e.target.value })
            }
            type="text"
            pattern="[0-9]{5}"
            maxLength="5"
            name="zipcode"
            placeholder="12345"
          />
        </div>
        <div className="flex items-center w-3/4 lg:w-fit justify-around text-center mt-5 flex-col">
          <p className="my-2 text-xl">With or Without Photo</p>
          <div className="flex w-full justify-around items-center">
            <div className="flex items-center ">
              <label htmlFor="with-photo" className="cursor-pointer">
                With
              </label>
              <input
                onChange={(e) =>
                  setFilterQuery({
                    ...filterQuery,
                    photoFilter: e.target.value,
                  })
                }
                name="photo"
                id="with-photo"
                value={true}
                type="radio"
                className="ml-2 cursor-pointer"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="without-photo" className="cursor-pointer">
                Either
              </label>
              <input
                defaultChecked
                onChange={(e) =>
                  setFilterQuery({
                    ...filterQuery,
                    photoFilter: e.target.value,
                  })
                }
                name="photo"
                id="without-photo"
                value={false}
                type="radio"
                className="ml-2 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-center justify-around">
        <button className="text-white text-center border py-3 mt-7 mx-auto min-w-[200px] rounded-sm w-2/5">
          Filter Supplies
        </button>
        <input
          onClick={(e) => handleReset(e)}
          className="text-white text-center border py-3 mt-7 mx-auto rounded-sm w-2/5 min-w-[200px] cursor-pointer"
          type="reset"
          value="Clear Filters"
        />
      </div>
    </form>
  );
};

export default FilterForm;
