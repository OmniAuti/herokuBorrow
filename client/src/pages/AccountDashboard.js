import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { getAccountItems, getAccountItemsAsked, getAccountBookmarked} from "../api/api";
import AccountDashboardAsked from "../components/AccountDashBoardAsked";
import AccountDashboardBookmarked from "../components/AccountDashBoardBookmarked";
import AccountDashboardOffered from "../components/AccountDashBoardOffered";
import AccountDashboardSettingsBar from "../components/AccountDashboardSettingsBar";

const AccountDashboard = ({modalDispatch }) => {

  const navigate = useNavigate();

  const { user, logOutUser } = UserAuth();

  const [accountItemsData, setAccountItemsData] = useState([])
  const [accountAskedData, setAccountAskedData] = useState([])
  const [accountBookmarked, setAccountBookmarked] = useState([])
  const [isAskLoaded, setIsAskLoaded] = useState(false)
  const [isItemsLoaded, setIsItemsLoaded] = useState(false)
  const [isBookmarkLoaded, setIsBookmarkLoaded] = useState(false)
  const [userUid, setUserUid] = useState('')

// THIS IS OFFERED/BORROWED DATA
  useEffect(() => {
    if (user === undefined) return
    getAccountItems({_uid: user.uid}).then(res => setAccountItemsData(res.data))
    setIsItemsLoaded(true)
    setUserUid(user.uid);
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

  useEffect(() => {
    if (user === undefined) return

    getAccountBookmarked({_uid: user.uid}).then(res => setAccountBookmarked(res.data))
    setIsBookmarkLoaded(true)
    return () => {
      setIsBookmarkLoaded(false)
    }
  }, [user])


const handleLogOutUser = async () => {
  await logOutUser();
  navigate("/account-gateway");
};


  return (
    <section className=" grid grid-cols-7 grid-rows-8 md:grid-rows-6 gap-3 pt-5 max-h-fit h-fit">

      
      <AccountDashboardSettingsBar handleLogOutUser={handleLogOutUser}/>
      <AccountDashboardAsked modalDispatch={modalDispatch} isAskLoaded={isAskLoaded} accountAskedData={accountAskedData}/>
      <AccountDashboardOffered isItemsLoaded={isItemsLoaded} accountItemsData={accountItemsData} modalDispatch={modalDispatch}/>
      <AccountDashboardBookmarked userUid={userUid} isBookmarkLoaded={isBookmarkLoaded} accountBookmarked={accountBookmarked} accountItemsData={accountItemsData}/>

    </section>
  );
};

export default AccountDashboard;
