import { useState, useEffect } from "react";

const SingleItemFocusModal = ({ data }) => {
  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {
    if (Object.keys(data).length <= 0) return
    setActiveModal(true);
  }, [data]);

  return (
    <div
      className={
        activeModal
          ? "fixed bg-black/50 z-40 w-full h-full top-0 left-0 right-0"
          : "fixed bg-black/50 z-40 w-full h-full top-0 left-0 right-0 hidden"
      }
    >
      <div className=" z-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="w-96 h-52 bg-white rounded-tr-sm rounded-tl-sm">
          <p className="text-black">Type: {data.type}</p>
        </div>

        <button
          onClick={() => setActiveModal(false)}
          className="w-full h-10 bg-gray-400 rounded-br-sm rounded-bl-sm"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SingleItemFocusModal;
