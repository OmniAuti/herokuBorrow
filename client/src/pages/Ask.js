import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { getAccountItemsAsked } from "../api/api";

import AskItemForm from "../components/AskItemForm";
import AskAccountColumn from "../components/AskAccountColumn";
import AskedForItems from "../components/AskedForItems";

const Ask = ({ modalDispatch, refreshAfterEdit }) => {
  const [isAskLoaded, setIsAskLoaded] = useState(false);
  const [accountAskedData, setAccountAskData] = useState([]);
  const [updateAfterPost, setUpdateAfterPost] = useState(false);
  const [seeAskItems, setSeeAskItems] = useState(true);

  const { user } = UserAuth();

  useEffect(() => {
    if (user === undefined) return;
    handleAskLoading(user);
    return () => {
      setIsAskLoaded(false);
    };
  }, [user, refreshAfterEdit, updateAfterPost]);

  const handleAskLoading = async (user) => {
    try {
      await getAccountItemsAsked({ _uid: user.uid }).then((res) =>
        setAccountAskData(res.data)
      );
      setIsAskLoaded(true);
    } catch(e) {
      console.log(e)
    }
    
  };

  const handleUpdateAfterPost = () => {
    setIsAskLoaded(false);
    setUpdateAfterPost(!updateAfterPost);
  };

  const handleAskChangeUI = () => {
    setSeeAskItems(!seeAskItems)
  }

  return (
    <section className="w-full flex flex-col">
      <button className="my-10 bg-sky-500 py-2 w-1/3 mx-auto" onClick={handleAskChangeUI}>Click Here To {seeAskItems? 'Ask For Supplies': 'See Asked For Supplies'}</button>
      {seeAskItems ? (
        <>
          <h1 className="text-5xl  text-center">Asked For Supplies</h1>
          <AskedForItems modalDispatch={modalDispatch} />
        </>
      ) : (
        <>
          <h1 className="text-5xl mb-5 text-center">Ask For Supplies</h1>
          <div className="flex flex-col lg:flex-row">
            <AskAccountColumn
              modalDispatch={modalDispatch}
              accountAskedData={accountAskedData}
              isAskLoaded={isAskLoaded}
            />

            <AskItemForm handleUpdateAfterPost={handleUpdateAfterPost} />
          </div>
        </>
      )}
    </section>
  );
};

export default Ask;
