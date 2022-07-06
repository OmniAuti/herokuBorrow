import { useState, useRef } from "react";

import { postSingleItem } from "../api/api";

const PostItem = () => {
  const [formData, setFormData] = useState({
    type: "pencil",
    quantity: 1,
    description: "",
    condition: "new",
    location: "",
    zipcode: "",
  });

  const handleTypeChange = (e) => {
    setFormData({ ...formData, type: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleQuantityChange = (e) => {
    if (e.target.value.length > 3) return;
    setFormData({ ...formData, quantity: e.target.value });
  };

  const handleConditionChange = (e) => {
    setFormData({ ...formData, condition: e.target.value });
  };

  const handleLocationChange = (e) => {
    setFormData({ ...formData, location: e.target.value });
  };
  const handleZIPChange = (e) => {
    setFormData({ ...formData, zipcode: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postSingleItem(formData);
      e.target.reset();
      setFormData({ ...formData, quantity: 1 });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="text-center block ">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="text-black text-2xl rounded-md"
      >
        <label htmlFor="type">Type of supplies</label>
        <select
          id="type"
          className="w-full h-12 my-1 pl-1 text-center rounded-md"
          required
          onChange={(e) => handleTypeChange(e)}
        >
          <option default value="pencil">
            Pencil
          </option>
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
        <label htmlFor="description">Description</label>
        <input
          id="description"
          required
          onChange={(e) => handleDescriptionChange(e)}
          className="block w-full h-12 my-2 pl-1 text-center rounded-md"
          type="text"
          name="type"
          maxLength="49"
          pattern="{49}"
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          id="quantity"
          required
          onChange={(e) => handleQuantityChange(e)}
          className="block w-1/2 h-12 my-2 mx-auto pl-1 text-center rounded-md"
          type="number"
          name="quantity"
          max="999"
          min="1"
          value={formData.quantity}
        />
        <label htmlFor="condition">Condition</label>
        <select
          id="condition"
          required
          onChange={(e) => handleConditionChange(e)}
          className="block w-full h-12 my-2 pl-1 text-center rounded-md"
        >
          <option default value="new">
            New
          </option>
          <option value="slightly used">Slightly Used</option>
          <option value="moderately used">Moderately Used</option>
          <option value="heavily used">Heavily Used</option>
        </select>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          required
          onChange={(e) => handleLocationChange(e)}
          className="block w-full h-12 my-2 pl-1 text-center rounded-md"
          type="text"
          name="location"
          maxLength="49"
        />
        <label htmlFor="zipcode">Zipcode</label>
        <input
          id="zipcode"
          required
          onChange={(e) => handleZIPChange(e)}
          className="block w-full h-12 my-2 pl-1 text-center rounded-md"
          type="text"
          pattern="[0-9]{5}"
          maxLength="5"
          name="zipcode"
        />
        <input
          type="submit"
          className="text-white cursor-pointer bg-sky-900 px-10 py-2 my-5 rounded-md"
        />
      </form>
    </div>
  );
};

export default PostItem;
