import { useState } from "react";
import { postAskItem } from "../api/api";

const AskItemForm = () => {
  const [askObj, setAskObj] = useState({
    who: "teacher",
    type: "",
    quantity: 1,
    condition: "",
    location: "",
    zipcode: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(askObj);
    try {
      await postAskItem(askObj);
      e.target.reset();
      setAskObj({
        who: "teacher",
        type: "",
        quantity: 1,
        condition: "",
        location: "",
        zipcode: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="w-full border ">
      <div className="text-center block w-1/2 mx-auto">
        <form
          className="text-black text-2xl rounded-md"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label htmlFor="who">I am a . . .</label>
          <select
            onChange={(e) => setAskObj({ ...askObj, who: e.target.value })}
            id="who"
            name="who"
            className="w-full h-12 my-2 pl-1 text-center rounded-md"
            required
            value={setAskObj.who}
          >
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
            onChange={(e) => setAskObj({ ...askObj, quantity: e.target.value })}
          />
          <label htmlFor="condition">Condition</label>
          <select
            id="condition"
            required
            className="block w-full h-12 my-2 pl-1 text-center rounded-md"
            onChange={(e) =>
              setAskObj({ ...askObj, condition: e.target.value })
            }
          >
            <option value="new">New</option>
            <option value="slightly used">Slightly Used</option>
            <option value="moderately used">Moderately Used</option>
            <option value="heavily used">Heavily Used</option>
          </select>
          <label htmlFor="location">Location</label>
          <input
            id="location"
            required
            className="block w-full h-12 my-2 pl-1 text-center rounded-md"
            type="text"
            name="location"
            maxLength="49"
            onChange={(e) => setAskObj({ ...askObj, location: e.target.value })}
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
          />
          <input
            type="submit"
            className="text-white cursor-pointer bg-sky-900 px-10 py-2 my-5 rounded-md"
          />
        </form>
      </div>
    </section>
  );
};

export default AskItemForm;
