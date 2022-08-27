import { useState, useEffect } from "react";

import { postSingleItem } from "../api/api";
import SuccessfulPost from "./SuccessfulPost";
import { UserAuth } from "../context/AuthContext";

const PostItemForm = ({ handleUpdateAfterPost }) => {
  const { user } = UserAuth();

  const [postSuccess, setPostSuccess] = useState(false);

  const handleCloceSuccessfulPost = () => {
    setPostSuccess(false);
  };

  const [formData, setFormData] = useState({
    type: "",
    quantity: 1,
    description: "",
    condition: "",
    location: "",
    zipcode: "",
    postType: "offer",
    _uid: "",
    bookmarked: false,
  });
  //  APPENDING FIREBASE USER ID ONTO ITEM POST
  useEffect(() => {
    handleUIDChange(user);
  }, [formData.type]);

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

  const handleUIDChange = async (user) => {
    if (!user) return;
    try {
      if (user.uid === undefined) return;
      var uid = await user.uid;
      setFormData({ ...formData, _uid: uid });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await postSingleItem(formData).then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          handleUpdateAfterPost();
          setPostSuccess(true);
          e.target.reset();
          setFormData({
            type: "",
            quantity: 1,
            description: "",
            condition: "",
            location: "",
            zipcode: "",
            postType: "offer",
            _uid: "",
            bookmarked: false,
          });
        } else if (res.status >= 400 && res.status <= 499) {
          alert("Posting Offer Item Failed. Try Again.");
        }
      });
    } catch (err) {
      alert("Posting Offer Item Failed. Try Again.");
      console.log(err);
    }
  };

  return (
    <div className="text-center block sm:w-3/4 w-full lg:w-1/2 xl:w-1/3 xl:mx-auto mx-auto lg:mx-5 max-h-[750px] h-[750px] min-h-[750px]">
      <h2 className="text-3xl mb-5 underline">Offer Supplies</h2>
      {!postSuccess && (
        <form onSubmit={(e) => handleSubmit(e)} className="text-black text-xl">
          <label htmlFor="type">Type of supplies</label>
          <select
            id="type"
            className="w-full h-10 my-2 pl-1 text-center rounded-md"
            required
            onChange={(e) => handleTypeChange(e)}
            value={formData.type}
          >
            <option value="">Select A Type Of Supplies</option>
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
          <label htmlFor="description">Description</label>
          <input
            id="description"
            onChange={(e) => handleDescriptionChange(e)}
            className="block w-full h-10 my-2 pl-1 text-center rounded-md"
            type="text"
            name="type"
            maxLength="49"
            value={formData.description}
            placeholder="This has . . ."
          />
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            required
            onChange={(e) => handleQuantityChange(e)}
            className="block w-1/2 h-10 my-2 mx-auto pl-1 text-center rounded-md"
            type="number"
            name="quantity"
            max="999"
            min="1"
            maxLength={3}
            value={formData.quantity}
          />
          <label htmlFor="condition">Condition</label>
          <select
            id="condition"
            required
            onChange={(e) => handleConditionChange(e)}
            className="block w-full h-10 my-2 pl-1 text-center rounded-md"
            value={formData.condition}
          >
            <option default value="">
              Select Condition Of Supplies
            </option>
            <option default value="New">
              New
            </option>
            <option value="Slightly Used">Slightly Used</option>
            <option value="Moderately Used">Moderately Used</option>
            <option value="Heavily Used">Heavily Used</option>
          </select>
          <label htmlFor="location">General Location</label>
          <input
            id="location"
            required
            onChange={(e) => handleLocationChange(e)}
            className="block w-full h-10 my-2 pl-1 text-center rounded-md"
            type="text"
            name="location"
            maxLength="49"
            value={formData.location}
            placeholder="Somewhere City"
          />
          <label htmlFor="zipcode">Zipcode</label>
          <input
            id="zipcode"
            required
            onChange={(e) => handleZIPChange(e)}
            className="block w-full h-10 my-2 pl-1 text-center rounded-md"
            type="text"
            pattern="[0-9]{5}"
            maxLength="5"
            name="zipcode"
            value={formData.zipcode}
            placeholder="12345"
          />
          <input
            value="Offer Supplies"
            type="submit"
            className="text-white w-full cursor-pointer hover:bg-sky-900 bg-sky-500 px-10 py-2 mt-16 rounded-md"
          />
        </form>
      )}
      {postSuccess && (
        <SuccessfulPost handleCloceSuccessfulPost={handleCloceSuccessfulPost} />
      )}
    </div>
  );
};

export default PostItemForm;
