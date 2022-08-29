const AccountSupplyObjectCard = ({ data, modalDispatch }) => {
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
    <div
      className=" w-full rounded-md my-1 mx-[12px] p-1"
      style={{ backgroundColor: cardBgColor }}
    >
      <div className="flex justify-around flex-col bg-white w-full h-full pb-5 rounded-md relative overflow-hidden">
        <div className="flex justify-around w-full p-5">
        {data.postType === 'offer' ? <img
            className="h-52 max-h-52 min-h-52 w-full object-contain object-center"
            src={
              data.photoInfo.url !== ""
                ? data.photoInfo.url
                : "./imgs/missing-file.svg"
            }
            alt="Supply Item Picture"
          /> : <img
          className="h-52 max-h-52 min-h-52 w-full object-contain object-center"
          src="./imgs/astockphoto.jpg"
          alt="Supply Item Picture"
        />}
          <ul className="w-1/2 pl-2 h-52 max-h-52 flex flex-col pt-10 justify-around">
            {data.postType === "ask" && (
              <li className="text-black my-1">Who: {data.who}</li>
            )}
            <li className="text-black my-1">Type: {data.type}</li>
            <li className="text-black my-1 ">Quantity: {data.quantity}</li>
            {data.postType === "ask" ? (
              <li className="text-black my-1">
                Condition:{" "}
                {data.condition
                  .join("")
                  .slice(0, data.condition.join("").length - 2)}
              </li>
            ) : (
              <li className="text-black my-1">
                Condition:{" "}
                {data.condition}
              </li>
            )}
            <li className="text-black my-1">Location: {data.location}</li>
            <li className="text-black my-1">Zipcode: {data.zipcode}</li>
          </ul>
        </div>
        {data.postType === "ask" && (
          <ul className="block ml-5 pt-2">
            <li className="text-black">
              Specifically Asked For: {data.specify}
            </li>
          </ul>
        )}
        {data.postType === "offer" && (
          <div className="pt-2 pl-5">
            <ul>
              <li className="text-black m-1 clear-left">
                Description: {data.description}
              </li>
            </ul>
          </div>
        )}

        <button
          onClick={() =>
            modalDispatch({
              type: `ACCOUNT_MODAL-${data.postType}`,
              payload: data._id,
            })
          }
          className="text-center cursor-pointer absolute -right-2 -top-2 border p-2 hover:shadow-lg rounded-lg bg-white"
        >
          <img
            className="w-10 mx-auto mt-1 "
            src="./imgs/editPost.png"
            alt="Edit Post Icon"
          />
        </button>
        <button
          onClick={() => {
          {data.postType === 'offer' ? modalDispatch({
              type: "DELETE_SINGLE_POST",
              payload: [data._id, data.postType, data.photoInfo],
            }) : modalDispatch({
              type: "DELETE_SINGLE_POST",
              payload: [data._id, data.postType],
            })}
          }}
          className="bg-white text-center cursor-pointer absolute -right-2 -bottom-2 border py-2 pl-1 pr-3 hover:shadow-[-1px_-4px_15px_-3px_rgb(0,0,0,0.1),-1px_-3px_6px_-4px_rgb(0,0,0,0.1)] rounded-lg"
        >
          <img
            className="w-10 mx-auto mb-1 "
            src="./imgs/deletePost.svg"
            alt="Edit Post Icon"
          />
        </button>
      </div>
    </div>
  );
};

export default AccountSupplyObjectCard;
