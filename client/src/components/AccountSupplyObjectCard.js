const AccountSupplyObjectCard = ({ data }) => {
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
    <div className=" w-full rounded-md my-1 mx-[12px] p-1 cursor-pointer" style={{ backgroundColor: cardBgColor }}>
       <div
        className="flex justify-around bg-white w-full h-full rounded-md p-5 shadow-inner transition-all hover:shadow-black outline"
        
      >
        <img
          className="max-h-40 w-1/2 object-contain"
          src="./imgs/71C4yuOHHdL._AC_SL1500_.jpg"
          alt=""
        />
        <div>
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
    </div>
  );
};

export default AccountSupplyObjectCard;
