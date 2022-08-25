const SupplyObjectCard = ({ data, modalDispatch }) => {
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
      onClick={() => modalDispatch({ type: "MODAL", payload: data._id, cardBgColor })}
      className="w-screen lg:w-[32.33333%] lg:min-w-[318px] rounded-md my-2 lg:ml-[9px] p-1 cursor-pointer group"
      style={{ backgroundColor: cardBgColor }}
    >
      <div className="relative bg-white w-full h-[310px] max-h-[310px] rounded-md overflow-hidden py-2 shadow-inner transition-all duration-500 hover:shadow-black outline">
        <div className="h-52 max-h-52 min-h-52 w-full relative overflow-hidden">
          <div className="bg-black bg-opacity-80 w-fit absolute pr-10 pt-1 pb-20 -bottom-24 pl-40 -left-36 rounded-full text-2xl font-light">
            <p className="mb-5 -ml-2">
              {data.type.slice(0, 1).toUpperCase() + data.type.slice(1)}
            </p>
          </div>
          <img
            className="w-full h-full object-contain object-center"
            src="./imgs/astockphoto.jpg"
            alt=""
          />
        </div>
        <ul className="mt-3 px-1 flex items-center justify-around">
          <li className="text-black m-1 font-medium inline-block max-w-[140px] w-[125px] truncate">
            Quantity:{" "}
            <span className="text-black font-light">{data.quantity}</span>
          </li>
          <li className="text-black m-1 font-medium inline-block truncate ">
            Condition:{" "}
            <span className="text-black font-light">{data.condition}</span>{" "}
          </li>
        </ul>
        <button className="p-1 text-black absolute bg-sky-400 w-11/12 left-1/2 -translate-x-1/2 rounded-md bottom-2 font-base group-hover:bg-sky-900 group-hover:shadow-sm group-hover:text-white transition-colors duration-500">
          More Details
        </button>
      </div>
    </div>
  );
};

export default SupplyObjectCard;
