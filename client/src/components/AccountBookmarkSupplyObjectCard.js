const AccountBookmarkSupplyObjectCard = ({ data, modalDispatch }) => {
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
      onClick={() =>
        modalDispatch({ type: `MODAL-${data.postType}`, payload: data._id })
      }
      className=" w-full rounded-md my-1 mx-[12px] p-1 cursor-pointer"
      style={{ backgroundColor: cardBgColor }}
    >
      <div className="flex justify-around flex-col bg-white w-full h-full pb-5 rounded-md shadow-inner transition-all hover:shadow-black outline">
        <p className="text-black text-center mt-1 underline">
          {data.postType === "offer"
            ? "Offered Supplies"
            : "Asked For Supplies"}
        </p>

        <div className="flex justify-around w-full p-5">
          <img
            className="max-h-52 h-52 w-1/2 max-w-1/2 object-contain"
            src="./imgs/astockphoto.jpg"
            alt=""
          />
          <ul className="w-1/2 pl-5 h-52 max-h-52 flex flex-col justify-around">
            <li className="text-black">Type: {data.type}</li>
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
