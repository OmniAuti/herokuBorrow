import { useState, useEffect } from "react";
import { editAccountAsked } from "../api/api";

const ModalEditAsk = ({
  data,
  handleItemRefreshAfterEdit,
  handleEditSuccess,
}) => {
  const [newCondition, setNewCondition] = useState([]);

  const [askObj, setAskObj] = useState({
    who: "",
    type: "",
    quantity: 1,
    specify: "",
    condition: [],
    location: "",
    zipcode: "",
    postType: "ask",
    _uid: "",
    _id: "",
  });

  useEffect(() => {
    setAskObj({
      who: data.who,
      type: data.type,
      quantity: data.quantity,
      specify: data.specify,
      condition: data.condition,
      location: data.location,
      zipcode: data.zipcode,
      postType: data.postType,
      _uid: data.uid,
      _id: data._id,
    });
  }, [data]);
  console.log(askObj);

  const checkBoxArr = [
    { id: 1, value: "New", checked: false },
    { id: 2, value: "Slightly Used", checked: false },
    { id: 3, value: "Moderately Used", checked: false },
    { id: 4, value: "Heavily Used", checked: false },
  ];

  const handleCheckBoxes = (e) => {
    if (e.target.checked === true) {
      setNewCondition([...newCondition, `${e.target.value}, `]);
    } else if (e.target.checked === false) {
      const idx = newCondition.indexOf(`${e.target.value}, `);
      const arr = newCondition;
      arr.splice(idx, 1);
      setNewCondition([arr]);
    }
  };

  const handleCommas = async () => {
    if (newCondition.length <= 0) return;
    var arr = newCondition;
    arr[arr.length - 1] = arr[arr.length - 1].slice(
      0,
      arr[arr.length - 1].length - 2
    );
    setAskObj((askObj.condition = arr));
  };

  const handleAskSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newCondition.length > 0) {
        await handleCommas();
      }
      await editAccountAsked(askObj);
      handleEditSuccess();
      handleItemRefreshAfterEdit();
      e.target.reset();
      setAskObj({
        who: "",
        type: "",
        quantity: 1,
        specify: "",
        condition: [],
        location: "",
        zipcode: "",
        postType: "ask",
        _uid: "",
        _id: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="text-black " onSubmit={(e) => handleAskSubmit(e)}>
      <legend className="text-black text-xl underline underline-offset-1 mb-2">
        Ask Item Edit:{" "}
      </legend>
      <label htmlFor="who" className="text-black mb-">
        I am a . . .
      </label>
      <select
        onChange={(e) => setAskObj({ ...askObj, who: e.target.value })}
        id="who"
        name="who"
        className="w-full border my-1 mb-3 p-1 text-black text-center rounded-md"
        required
        value={askObj.who}
      >
        <option value="">Who Are You?</option>
        <option value="teacher">Teacher</option>
        <option value="parent">Parent</option>
      </select>
      <label htmlFor="type" className=" text-black">
        In need of a . . .
      </label>
      <select
        value={askObj.type}
        id="type"
        className="w-full my-1 mb-3 p-1 text-black border text-center rounded-md"
        required
        onChange={(e) => setAskObj({ ...askObj, type: e.target.value })}
      >
        <option value="">Select Type Of Supplies</option>
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
      <label htmlFor="quantity" className=" text-black">
        Quantity
      </label>
      <input
        id="quantity"
        required
        className="block border my-1 mb-3 p-1 w-1/2 mx-auto text-center text-black rounded-md"
        type="number"
        name="quantity"
        max="999"
        min="1"
        value={askObj.quantity}
        onChange={(e) => setAskObj({ ...askObj, quantity: e.target.value })}
      />
      <label className=" text-black" htmlFor="specify">Specify Your Needs</label>
      <input
        id="specify"
        required
        value={askObj.specify}
        className="block w-full border my-1 mb-3 p-1 mx-auto text-center text-black rounded-md"
        type="text"
        name="specify"
        maxLength="49"
        onChange={(e) => setAskObj({ ...askObj, specify: e.target.value })}
        placeholder="This is for . . ."
      />
      <hr className="mt-2"></hr>
      <p className=" text-black my-2">
        Currently Asked For Condition: {data.condition}
      </p>

      <hr className="mb-2"></hr>

      <label htmlFor="condition" className=" text-black underline">
        Update Asked For Condition:
      </label>

      <div className="flex flex-wrap items-center justify-around mt-1">
        {checkBoxArr.map((checkbox) => {
          return (
            <div className="" key={checkbox.id}>
              <label className="text-black mr-2" htmlFor={checkbox.value}>
                {checkbox.value}
              </label>
              <input
                onChange={(e) => handleCheckBoxes(e)}
                className="text-black my-1 mr-2 mb-3 p-1"
                id={checkbox.value}
                type="checkbox"
                value={checkbox.value}
              />
            </div>
          );
        })}
      </div>
      <label htmlFor="location" className=" text-black">
        General Location
      </label>
      <input
        id="location"
        required
        className="block w-full my-1 mb-3 p-1 text-black text-center border rounded-md"
        type="text"
        name="location"
        maxLength="49"
        onChange={(e) => setAskObj({ ...askObj, location: e.target.value })}
        placeholder="Somewhere City"
        value={askObj.location}
      />
      <label htmlFor="zipcode" className=" text-black">
        Zipcode
      </label>
      <input
        id="zipcode"
        required
        className="block my-1 mb-3 p-1 w-full border text-center rounded-md"
        type="text"
        pattern="[0-9]{5}"
        maxLength="5"
        name="zipcode"
        onChange={(e) => setAskObj({ ...askObj, zipcode: e.target.value })}
        placeholder="12345"
        value={askObj.zipcode}
      />
      <input
        value="Save Changes"
        type="submit"
        className="bg-sky-500 w-full h-10 my-2 rounded-sm hover:bg-sky-900 cursor-pointer"
      />
    </form>
  );
};

export default ModalEditAsk;
