const SupplyObjectCard = ({ data, modalDispatch }) => {
  var cardBgColor;

  switch (data.type) {
    case "pencil":
      cardBgColor = "#fee2e2";
      break;
    case "notebook":
      cardBgColor = "#dbeafe";
      break;
    case "highlighter":
      cardBgColor = "#dcfce7";
      break;
    case "binder":
      cardBgColor = "#fef9ce";
      break;
    case "ruler":
      cardBgColor = "#fce7f3";
      break;
    case "calculator":
      cardBgColor = "#f1f5f9";
      break;
    case "backpack":
      cardBgColor = "#f3e8ff";
      break;
    default:
      cardBgColor = "#fff";
      break;
  }
  return (

// NEED TO MAKE A LIKE OPTION TO STORE IN INTEREST SECTIO OF ACCOUNT

    <div
      onClick={() => modalDispatch({ type: "MODAL", payload: data._id })}
      className=" w-[calc(33.3333%-24px)] min-w-[400px] rounded-md my-5 mx-[12px] p-1 cursor-pointer group"
      style={{ backgroundColor: cardBgColor }}
    >
      <div className="relative bg-white w-full h-[310px] max-h-[310px] rounded-md overflow-hidden py-2 shadow-inner transition-all duration-500 hover:shadow-black outline">
        <div className="h-52 max-h-52 min-h-52 w-full relative overflow-hidden">
          <div className="bg-black bg-opacity-80 w-fit absolute pr-10 pt-1 pb-20 -bottom-24 pl-40 -left-36 rounded-full text-2xl font-light">
            <p className="mb-5 -ml-2">{data.type.slice(0,1).toUpperCase() + data.type.slice(1,)}</p>
          </div>
          <img
            className="w-full h-full object-contain object-center"
            src="./imgs/astockphoto.jpg"
            alt=""
          />
        </div>
        <ul className="mt-3 px-1 flex items-center justify-around">
          <li className="text-black m-1 font-medium inline-block max-w-[140px] w-[125px] truncate">Quantity: <span className="text-black font-light">{data.quantity}</span></li>
          <li className="text-black m-1 font-medium inline-block truncate ">Condition: <span className="text-black font-light">{data.condition}</span> </li>
        </ul>
        <button className="p-1 text-black absolute bg-sky-400 w-11/12 left-1/2 -translate-x-1/2 rounded-md bottom-2 font-base group-hover:bg-sky-900 group-hover:shadow-sm group-hover:text-white transition-colors duration-500">More Details</button>
      </div>

    </div>
  );
};

export default SupplyObjectCard;
