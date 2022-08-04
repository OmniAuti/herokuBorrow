import AccountSupplyObjectCard from "./AccountSupplyObjectCard";
import AccountSupplyLoading from "./AccountSupplyLoading";

const AskAccountColumn = ({ accountAskedData, isAskLoaded }) => {
  return (
    <div className="w-1/2 max-h-screen min-h-[750px]  bg-slate-400 rounded-sm overflow-scroll">
      <p className="w-full text-3xl underline text-center py-2 sticky top-0 bg-slate-400">
        Already Asked For
      </p>
      {!isAskLoaded ? (
        <div className="flex flex-wrap">
          <AccountSupplyLoading /> <AccountSupplyLoading />{" "}
          <AccountSupplyLoading />
        </div>
      ) : (
        <div className="flex flex-wrap">
          {accountAskedData.length > 0 ? (
            accountAskedData
              .filter((data) => data.postType === "ask")
              .map((data) => (
                <AccountSupplyObjectCard key={data._id} data={data} />
              ))
          ) : (
            <p className="text-2xl flex items-center justify-center w-full font-thin">
              You have not asked for any supplies
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AskAccountColumn;
