import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { getAccountItems } from "../api/api";

import PostItemForm from "../components/PostItemForm";
import OfferedAccountColumn from "../components/OfferedAccountColumn";

const Offer = () => {
  const [isItemsLoaded, setIsItemsLoaded] = useState(false)
  const [accountItemsData, setAccountItemsData] = useState([])

 // PLACE HOLDER FOR PROIFLE HASNT OFFERED ANYTHING YET. OR SIGN IN SECTION TO OFFER SOMETHING -- WHEN SIGNED IN SHOWS YOUR OFFERED ITEMS SIDE BY SIDE WITH FORM TO SUBMIT ITEMS

 // LAYOUT SHOULD HAVE ONE HALF THE LIST OF POSTED ITEMS -- OTHER SIDE FORM TO ADD MORE. IF NOT SIGN IN TO PROFILE

  const {user} = UserAuth()

  useEffect(() => {
    if (user === undefined) return;
    getAccountItems({_uid: user.uid}).then(res => setAccountItemsData(res.data))
    setIsItemsLoaded(true)
    return () => {
      setIsItemsLoaded(false)
    }
  }, [user])

  return (
    <section className="flex flex-col">
      <h1 className="text-center mb-10 text-5xl">Offer</h1>
      <div className="flex flex-col lg:flex-row justify-around">
      <OfferedAccountColumn isItemsLoaded={isItemsLoaded} accountItemsData={accountItemsData}/>
      <PostItemForm />
      </div>
    </section>
  );
};

export default Offer;
