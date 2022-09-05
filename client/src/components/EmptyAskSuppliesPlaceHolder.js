const EmptyAskSuppliesPlaceHolder = ({ errorPlaceholder }) => {
  return (
    <div className=" mt-10 mx-auto text-center flex items-center justify-around flex-col">
      {errorPlaceholder !== "" ? (
        <div className="relative w-full h-fit rounded-md overflow-hidden py-2">
          <img
            className="w-[150px] mx-auto my-10"
            src="/imgs/error.svg"
            alt="Post Edit Saved Successfully Icon"
          />
          <p className="text-3xl mb-3 text-center">
            Sorry, I seem to have broken myself.
            <br></br>
            <br></br>
            <span className="text-red-500">{errorPlaceholder}</span>
          </p>
        </div>
      ) : (
        <>
          <img
            src="./imgs/empty-box.svg"
            className="my-5 h=[200px] w-[200px]"
            alt="Empty Supplies Icon"
          />
          <h2 className="text-2xl my-5 font-light">
            There appears to be no one asking for supplies at the moment.
            <br></br>
            Check Back Soon!
          </h2>
        </>
      )}
    </div>
  );
};

export default EmptyAskSuppliesPlaceHolder;
