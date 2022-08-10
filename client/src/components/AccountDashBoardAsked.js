import AccountSupplyObjectCard from "./AccountSupplyObjectCard";
import AccountSupplyLoading from "./AccountSupplyLoading";

const AccountDashboardAsked = ({ accountAskedData, isAskLoaded }) => {
  return (
    <div className="row-start-2 row-end-4 md:row-start-1 md:row-end-5 md:min-h-[450px] col-start-1 -ml-5 sm:-ml-0 w-screen sm:w-full sm:col-start-2 max-h-[400px] md:max-h-screen col-end-8 md:col-end-5 bg-slate-400 rounded-sm overflow-scroll">
      <p className="w-full text-2xl text-center py-2 sticky top-0 bg-slate-400">
        Asked
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

export default AccountDashboardAsked;
