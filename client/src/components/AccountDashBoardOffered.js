import AccountSupplyObjectCard from "./AccountSupplyObjectCard";
import AccountSupplyLoading from "./AccountSupplyLoading";

const AccountDashboardOffered = ({ accountItemsData, isItemsLoaded }) => {
  return (
    <div className="row-start-4 row-end-6 h-[400px] md:h-fit -ml-5 sm:-ml-0 w-screen sm:w-full md:row-start-1 md:row-end-4 md:min-h-[400px] max-h-[500px] col-start-1 sm:col-start-2 md:col-start-5 col-end-8 bg-slate-400 rounded-sm overflow-scroll relative">
      <p className="w-full text-2xl text-center py-2 sticky top-0 bg-slate-400">
        Offered
      </p>
      {!isItemsLoaded ? (
        <div className="flex flex-wrap">
          <AccountSupplyLoading />
          <AccountSupplyLoading />
          <AccountSupplyLoading />
        </div>
      ) : (
        <div className="flex flex-wrap">
          {accountItemsData.length > 0 ? (
            accountItemsData
              .filter((data) => data.postType === "offer")
              .map((data) => (
                <AccountSupplyObjectCard key={data._id} data={data} />
              ))
          ) : (
            <p className="text-2xl flex items-center justify-center w-full font-thin">
              You have not offered any supplies
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AccountDashboardOffered;
