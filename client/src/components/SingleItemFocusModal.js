import { useState, useEffect } from "react";

const SingleItemFocusModal = ({ data }) => {
  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {
    if (Object.values(data).length <= 0) return;
    setActiveModal(true);
    return () => {
      console.log("cleared");
    };
  }, [data]);

  return (
    <div
      className={
        activeModal
          ? "fixed bg-black/50 z-40 w-full h-full top-0 left-0 right-0"
          : "fixed bg-black/50 z-40 w-full h-full top-0 left-0 right-0 hidden"
      }
    >
      <div className="z-50 shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="w-fit h-fit p-5  bg-white rounded-tr-sm rounded-tl-sm">
          <div className="w-96 h-40">
            <p className="text-black">Image: {data.image}</p>
          </div>
          <div className="flex flex-col items-start justify-around h-1/2 w-full">
            <p className="text-black my-1">Type: {data.type}</p>
            <p className="text-black my-1">Quantity: {data.quantity}</p>
            <p className="text-black my-1">Description: {data.description}</p>
            <p className="text-black my-1">Location: {data.location}</p>
            <p className="text-black my-1">Zipcode: {data.zipcode}</p>
          </div>
          <button className="bg-sky-500 w-full h-12 my-5 rounded-sm">
            Contact Offeror
          </button>

          <button
            onClick={() => setActiveModal(false)}
            className="w-full h-10 bg-gray-400 rounded-sm rounded-bl-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleItemFocusModal;
