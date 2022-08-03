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
      className=" w-[calc(33.3333%-24px)] min-w-[435px] rounded-md my-5 mx-[12px] p-1 cursor-pointer"
      style={{ backgroundColor: cardBgColor }}
    >
      <div className="relative bg-white w-full h-[450px] max-h-[450px] rounded-md overflow-hidden py-2 shadow-inner transition-all hover:shadow-black outline">
        <div className="h-52 max-h-52 min-h-52 w-full relative overflow-hidden">
          <div className="bg-black bg-opacity-80 w-fit absolute pr-10 pt-5 pb-24 -bottom-20 pl-40 -left-36 rounded-full text-2xl font-light">
            {data.type.slice(0,1).toUpperCase() + data.type.slice(1,)}
          </div>
          <img
            className="w-full h-full object-contain object-center"
            src="./imgs/astockphoto.jpg"
            alt=""
          />
        </div>
        <p className="text-black m-5 font-light overflow-hidden text-ellipsis truncate">
          {" "}
          <span className=" text-black font-medium ">Description:</span> {data.description}
        </p>

        <ul className="mt-7 ml-2 px-2">
          <li className="text-black m-1 font-medium inline-block w-[150px] max-w-[150px] truncate">Quantity: <span className="text-black font-light">{data.quantity}</span></li>
          <li className="text-black m-1 font-medium inline-block truncate ml-10">Condition: <span className="text-black font-light">{data.condition}</span> </li>
          <br></br>
          <br></br>
          <li className="text-black m-1 font-medium inline-block w-[150px] max-w-[150px] truncate text-ellipsis overflow-hidden">Location: <span className="text-black font-light">{data.location.slice(0,1).toUpperCase() + data.location.slice(1,)}</span></li>
          <li className="text-black m-1 font-medium inline-block ml-10 truncate">Zipcode: <a href={`https://www.unitedstateszipcodes.org/${data.zipcode}/`} target="_blank"><span className="text-black font-light">{data.zipcode}</span></a></li>
        </ul>
        <button className="p-1 text-black absolute bg-sky-500 w-11/12 left-1/2 -translate-x-1/2 rounded-md bottom-2">More Details</button>
      </div>

    </div>
  );
};

export default SupplyObjectCard;
