import AccountSupplyObjectCard from "./AccountSupplyObjectCard";
import AccountSupplyLoading from "./AccountSupplyLoading";
import { useEffect } from "react";


const AccountDashboardBookmarked = ({isBookmarkLoaded, accountBookmarked, accountItemsData, userUid}) => {


useEffect(() => {
  console.log(accountBookmarked)
}, [userUid])

  // THIS IS FOR LIKED POSTS THAT ARE OF INTEREST
    return (
        <div className="row-start-5 min-h-[250px] row-end-7 max-h-[500px] col-start-2 col-span-6 bg-slate-400 rounded-sm overflow-scroll">
        <p className="w-full text-2xl text-center py-2 sticky top-0 z-50 bg-slate-400">Saved Posts</p>
       {!isBookmarkLoaded ? <div className="flex flex-wrap"><AccountSupplyLoading/><AccountSupplyLoading/><AccountSupplyLoading/></div> :
        <div className="flex flex-wrap">
          {accountBookmarked.filter(data => data._uid === userUid).length > 0 ? accountItemsData.filter(data => data.bookmarked === true).filter(data => data._uid === userUid).map(data => <AccountSupplyObjectCard key={data._id} data={data}/>) : <p className="text-2xl w-full font-thin text-center">You have not bookmarked any supplies</p>}
        </div>}
      </div>
    )
}

export default AccountDashboardBookmarked;