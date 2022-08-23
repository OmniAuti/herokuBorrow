import AccountBookmarkSupplyObjectCard from "./AccountBookmarkSupplyObjectCard";
import AccountSupplyLoading from "./AccountSupplyLoading";

const AccountDashboardBookmarked = ({
  isBookmarkLoaded,
  accountBookmarked,
  modalDispatch,
}) => {
  return (
    <div className="row-start-6 row-end-8 h-[400px] -ml-5 sm:-ml-0 w-screen sm:w-full lg:h-fit lg:row-start-4 min-h-[400px] lg:row-end-7 max-h-[400px] col-start-1 sm:col-start-2 col-span-7 sm:col-span-6 bg-slate-400 rounded-sm overflow-scroll">
      <p className="w-full text-2xl text-center py-2 sticky top-0 z-10 bg-slate-400">
        Bookmarked Posts
      </p>
      {!isBookmarkLoaded ? (
        <div className="flex flex-wrap">
          <AccountSupplyLoading />
          <AccountSupplyLoading />
          <AccountSupplyLoading />
        </div>
      ) : (
        <div className="flex flex-wrap">
          {accountBookmarked.length > 0 ? (
            accountBookmarked.map((data) => (
              <AccountBookmarkSupplyObjectCard
                modalDispatch={modalDispatch}
                key={data._id}
                data={data}
              />
            ))
          ) : (
            <p className="text-2xl w-full font-thin text-center">
              You have not bookmarked any supplies
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AccountDashboardBookmarked;
