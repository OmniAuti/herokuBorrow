import { useState, useEffect } from "react";
import { postAskItem } from "../api/api";

import SuccessfulPost from "./SuccessfulPost";

import { UserAuth } from "../context/AuthContext";

const AskItemForm = ({ handleUpdateAfterPost }) => {
  const { user } = UserAuth();

  const [postSuccess, setPostSuccess] = useState(false);

  const handleCloceSuccessfulPost = () => {
    setPostSuccess(false);
  };

  const [askObj, setAskObj] = useState({
    who: "",
    type: "",
    quantity: 1,
    condition: [],
    location: "",
    zipcode: "",
    postType: "ask",
    _uid: "",
  });

  const handleUIDChange = async (user) => {
    if (!user) return;
    try {
      if (user.uid === undefined) return;
      var uid = await user.uid;
      console.log(uid);
      setAskObj({ ...askObj, _uid: uid });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleUIDChange(user);
  }, [askObj.type]);

  const checkBoxArr = [
    { id: 1, value: "New", checked: false },
    { id: 2, value: "Slightly Used", checked: false },
    { id: 3, value: "Moderately Used", checked: false },
    { id: 4, value: "Heavily Used", checked: false },
  ];

  const handleCheckBoxes = (e) => {
    if (e.target.checked === true) {
      setAskObj({
        ...askObj,
        condition: [...askObj.condition, `${e.target.value}, `],
      });
    } else if (e.target.checked === false) {
      const idx = askObj.condition.indexOf(`${e.target.value}, `);
      const arr = askObj.condition;
      arr.splice(idx, 1);
      setAskObj({ ...askObj, condition: arr });
    }
  };

  const handleCommas = async () => {
    var arr = askObj.condition;
    arr[arr.length - 1] = arr[arr.length - 1].slice(
      0,
      arr[arr.length - 1].length - 2
    );
    setAskObj({ ...askObj, condition: arr });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleCommas();
      console.log(askObj);
      await postAskItem(askObj);
      e.target.reset();
      setAskObj({
        who: "",
        type: "",
        quantity: 1,
        condition: "",
        location: "",
        zipcode: "",
        postType: "ask",
        _uid: "",
      });
      handleUpdateAfterPost();
      setPostSuccess(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" text-center block sm:w-3/4 w-full lg:w-1/2 xl:w-1/3 mx-auto xl:mx-auto lg:ml-5 max-h-screen h-[750px] min-h-[750px]">
      <h2 className="text-3xl underline mb-5">Ask For Supplies</h2>
      {!postSuccess && (
        <form className="text-black text-2xl" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="who">I am a . . .</label>
          <select
            onChange={(e) => setAskObj({ ...askObj, who: e.target.value })}
            id="who"
            name="who"
            className="w-full h-12 my-2 pl-1 text-center rounded-md"
            required
            value={setAskObj.who}
          >
            <option default value="">
              Who Are You?
            </option>
            <option default value="teacher">
              Teacher
            </option>

            <option value="parent">Parent</option>
          </select>
          <label htmlFor="type">In need of a . . .</label>
          <select
            value={askObj.type}
            id="type"
            className="w-full h-12 my-2 pl-1 text-center rounded-md"
            required
            onChange={(e) => setAskObj({ ...askObj, type: e.target.value })}
          >
            <option value="">Select Type Of Supplies</option>
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
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            required
            className="block w-1/2 h-12 my-2 mx-auto pl-1 text-center rounded-md"
            type="number"
            name="quantity"
            max="999"
            min="1"
            value={askObj.quantity}
            onChange={(e) => setAskObj({ ...askObj, quantity: e.target.value })}
          />
          <label htmlFor="condition">Acceptable Condition</label>

          <div className="flex flex-wrap items-center justify-around mb-5">
            {checkBoxArr.map((checkbox) => {
              return (
                <div className="my-5 h-1 " key={checkbox.id}>
                  <label className=" mr-2" htmlFor={checkbox.value}>
                    {checkbox.value}
                  </label>
                  <input
                    onChange={(e) => handleCheckBoxes(e)}
                    className="my-1 mr-2 mb-3 p-1"
                    id={checkbox.value}
                    type="checkbox"
                    value={checkbox.value}
                  />
                </div>
              );
            })}
          </div>
          <label htmlFor="location">General Location</label>
          <input
            id="location"
            required
            className="block w-full h-12 my-2 pl-1 text-center rounded-md"
            type="text"
            name="location"
            maxLength="49"
            onChange={(e) => setAskObj({ ...askObj, location: e.target.value })}
            placeholder="Somewhere City"
          />
          <label htmlFor="zipcode">Zipcode</label>
          <input
            id="zipcode"
            required
            className="block w-full h-12 my-2 pl-1 text-center rounded-md"
            type="text"
            pattern="[0-9]{5}"
            maxLength="5"
            name="zipcode"
            onChange={(e) => setAskObj({ ...askObj, zipcode: e.target.value })}
            placeholder="12345"
          />
          <input
            value="Ask For Supplies"
            type="submit"
            className="text-white w-full cursor-pointer hover:bg-sky-900 bg-sky-500 px-10 py-2 mt-5 rounded-md"
          />
        </form>
      )}
      {postSuccess && (
        <SuccessfulPost handleCloceSuccessfulPost={handleCloceSuccessfulPost} />
      )}
    </div>
  );
};

export default AskItemForm;
