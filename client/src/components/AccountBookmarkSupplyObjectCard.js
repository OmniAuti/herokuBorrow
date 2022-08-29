const AccountBookmarkSupplyObjectCard = ({ data, modalDispatch }) => {
  var cardBgColor;
  switch (data.type) {
    // THINGS THAT MARK OR WRITE

    case "pencil":
      cardBgColor = "#fecaca";
      break;
    case "pen":
      cardBgColor = "#fecaca";
      break;
    case "highlighter":
      cardBgColor = "#fecaca";
      break;
    case "marker":
      cardBgColor = "#fecaca";
      break;
    case "colored pencil":
      cardBgColor = "#fecaca";
      break;
    case "crayon":
      cardBgColor = "#fecaca";
      break;
    case "paint brush":
      cardBgColor = "#fecaca";
      break;
    case "highlighter":
      cardBgColor = "#fecaca";
      break;
    // HOLDERS OF SUPPLIES
    case "binder":
      cardBgColor = "#fef08a";
      break;
    case "folder":
      cardBgColor = "#fef08a";
      break;
    case "pencil pouch/case":
      cardBgColor = "#fef08a";
      break;
    case "lunchbox":
      cardBgColor = "#fef08a";
      break;
    //PAPER
    case "notebook":
      cardBgColor = "#bae6fd";
      break;
    case "journal":
      cardBgColor = "#bae6fd";
      break;
    case "colored paper":
      cardBgColor = "#bae6fd";
      break;
    case "graphing paper":
      cardBgColor = "#bae6fd";
      break;
    case "sticky note":
      cardBgColor = "#bae6fd";
      break;
    case "notecard":
      cardBgColor = "#bae6fd";
      break;
    // STUDY MATERIAL
    case "flashcard":
      cardBgColor = "#bbf7d0";
      break;
    case "miscellaneous study material":
      cardBgColor = "#bbf7d0";
      break;
    //BOOKS
    case "book":
      cardBgColor = "#1e293b";
      break;
    case "miscellaneous books":
      cardBgColor = "#1e293b";
      break;
    // TOOLS
    case "ruler":
      cardBgColor = "#fed7aa";
      break;
    case "calculator":
      cardBgColor = "#fed7aa";
      break;
    case "protractor":
      cardBgColor = "#fed7aa";
      break;
    // BACKPACK
    case "backpack":
      cardBgColor = "#e9d5ff";
      break;
    default:
      cardBgColor = "#fff";
      break;
  }

  return (
    // NEED TO MAKE A LIKE OPTION TO STORE IN INTEREST SECTIO OF ACCOUNT

    <div
      onClick={() =>
        modalDispatch({ type: `MODAL-${data.postType}`, payload: data._id })
      }
      className=" w-full rounded-md my-1 mx-[12px] p-1 cursor-pointer"
      style={{ backgroundColor: cardBgColor } }
    >
      <div className="flex justify-around flex-col bg-white w-full h-full pb-2 rounded-md shadow-inner transition-all hover:shadow-black outline">
        <p className="text-black text-center mt-1 underline">
          {data.postType === "offer"
            ? "Offered Supplies"
            : "Asked For Supplies"}
        </p>

        <div className="flex justify-around w-full p-5 pb-2">
          <div className="flex justify-around w-full relative overflow-hidden">
            <div className="bg-black bg-opacity-80 w-fit absolute pr-10 pt-1 pb-20 -bottom-24 pl-40 -left-36 rounded-full text-3xl font-light">
              <p className="mb-5 -ml-2">
                {data.type.slice(0, 1).toUpperCase() + data.type.slice(1)}
              </p>
            </div>
            {data.postType === "offer" ? (
              <img
                className="h-52 max-h-52 min-h-52 w-full object-contain object-center"
                src={
                  data.photoInfo.url !== ""
                    ? data.photoInfo.url
                    : "./imgs/missing-file.svg"
                }
                alt="Supply Item Picture"
              />
            ) : (
              <img
                className="h-52 max-h-52 min-h-52 w-full object-contain object-center"
                src="./imgs/astockphoto.jpg"
                alt="Supply Item Picture"
              />
            )}
          </div>
          <ul className="w-1/2 pl-5 h-52 max-h-52 flex flex-col justify-around">
            <li className="text-black ">Quantity: {data.quantity}</li>
            {data.postType === "offer" ? (
              <li className="text-black ">Condition: {data.condition}</li>
            ) : (
              <li className="text-black ">
                Condition:{" "}
                {data.condition
                  .join("")
                  .slice(0, data.condition.join("").length - 2)}
              </li>
            )}
            <li className="text-black ">Location: {data.location}</li>
            <li className="text-black">Zipcode: {data.zipcode}</li>
          </ul>
        </div>
        <div className="px-5">
          <ul>
            <li className="text-black m-1 clear-left">
              Description: {data.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountBookmarkSupplyObjectCard;
