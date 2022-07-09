const DumpObject = ({ data, modalDispatch }) => {
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
    <div onClick={() => modalDispatch({type: "MODAL", payload: data._id})} className=" w-[calc(33.3333%-24px)] rounded-md my-5 mx-[12px] p-1 cursor-pointer" style={{ backgroundColor: cardBgColor }}>
       <div
        className=" bg-white w-full h-full rounded-md p-5"
        
      >
        <img
          className="h-40 w-3/4 mx-auto object-contain"
          src="./imgs/71C4yuOHHdL._AC_SL1500_.jpg"
          alt=""
        />
        <ul className="my-5">
          <li className="text-black m-1">Type: {data.type}</li>
          <li className="text-black m-1">Quantity: {data.quantity}</li>
          <li className="text-black m-1">Description: {data.description}</li>
          <li className="text-black m-1">Condition: {data.condition}</li>
          <li className="text-black m-1">Location: {data.location}</li>
          <li className="text-black m-1">Zipcode: {data.zipcode}</li>
        </ul>
      </div>
    </div>
  );
};

export default DumpObject;
