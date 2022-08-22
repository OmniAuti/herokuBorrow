import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { getAccountItems } from "../api/api";

import PostItemForm from "../components/PostItemForm";
import OfferedAccountColumn from "../components/OfferedAccountColumn";

const Offer = ({ modalDispatch, refreshAfterEdit }) => {
  const [isItemsLoaded, setIsItemsLoaded] = useState(false);
  const [accountItemsData, setAccountItemsData] = useState([]);
  const [updateAfterPost, setUpdateAfterPost] = useState(false);

  const { user } = UserAuth();

  useEffect(() => {
    if (user === undefined) return;
    handleOfferLoading(user)
    return () => {
      setIsItemsLoaded(false);
    };
  }, [user, refreshAfterEdit, updateAfterPost]);

  const handleOfferLoading = async () => {
    await getAccountItems({ _uid: user.uid }).then((res) =>
      setAccountItemsData(res.data)
    );
    setIsItemsLoaded(true);
  };

  const handleUpdateAfterPost = () => {
    setIsItemsLoaded(false)
    setUpdateAfterPost(!updateAfterPost);
  };

  return (
    <section className="flex flex-col">
      <h1 className="text-center mb-10 text-5xl">Offer</h1>
      <div className="flex flex-col lg:flex-row justify-around">
        <OfferedAccountColumn
          refreshAfterEdit={refreshAfterEdit}
          modalDispatch={modalDispatch}
          isItemsLoaded={isItemsLoaded}
          accountItemsData={accountItemsData}
        />
        <PostItemForm handleUpdateAfterPost={handleUpdateAfterPost}/>
      </div>
    </section>
  );
};

export default Offer;
