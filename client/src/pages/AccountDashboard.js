import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getAccountItems, getAccountItemsAsked} from "../api/api";
import AccountDashboardAsked from "../components/AccountDashBoardAsked";
import AccountDashboardBorrowedInterest from "../components/AccountDashBoardBorrowed";
import AccountDashboardOffered from "../components/AccountDashBoardOffered";
import AccountDashboardSettingsBar from "./AccountDashboardSettingsBar";

const AccountDashboard = () => {

  const navigate = useNavigate();

  const { user, logOutUser } = UserAuth();

  const [accountItemsData, setAccountItemsData] = useState([])
  const [accountAskedData, setAccountAskedData] = useState([])
  const [isAskLoaded, setIsAskLoaded] = useState(false)
  const [isItemsLoaded, setIsItemsLoaded] = useState(false)

// THIS IS OFFERED/BORROWED DATA
  useEffect(() => {
    if (user === undefined) return
    getAccountItems({_uid: user.uid}).then(res => setAccountItemsData(res.data))
    setIsItemsLoaded(true)
    return () => {
      setIsItemsLoaded(false)
    }
  }, [user])

//THIS IS ASKED DATA
useEffect(() => {
  if (user === undefined) return
  getAccountItemsAsked({_uid: user.uid}).then(res => setAccountAskedData(res.data))
  setIsAskLoaded(true);
  return () => {
    setIsAskLoaded(false)
  }
}, [user])



const handleLogOutUser = async () => {
  await logOutUser();
  navigate("/account-gateway");
};


  return (
    <section className=" grid grid-cols-7 grid-rows-6 gap-3 pt-5 max-h-screen min-h-[750px]">

      
      <AccountDashboardSettingsBar handleLogOutUser={handleLogOutUser}/>
      <AccountDashboardAsked isAskLoaded={isAskLoaded} accountAskedData={accountAskedData}/>
      <AccountDashboardOffered isItemsLoaded={isItemsLoaded} accountItemsData={accountItemsData}/>
      <AccountDashboardBorrowedInterest isItemsLoaded={isItemsLoaded} accountItemsData={accountItemsData}/>



    </section>
  );
};

export default AccountDashboard;
