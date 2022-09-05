import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { getAccountItems } from "../api/api";

import PostItemForm from "../components/PostItemForm";
import OfferedAccountColumn from "../components/OfferedAccountColumn";

const Offer = ({ modalDispatch, refreshAfterEdit, handlePostFailure }) => {
  const [isItemsLoaded, setIsItemsLoaded] = useState(false);
  const [accountItemsData, setAccountItemsData] = useState([]);
  const [updateAfterPost, setUpdateAfterPost] = useState(false);
  const [errorPlaceholder, setErrorPlaceholder] = useState('')

  const { user } = UserAuth();

  useEffect(() => {
    if (user === undefined) return;
    handleOfferLoading(user);
    return () => {
      setIsItemsLoaded(false);
    };
  }, [user, refreshAfterEdit, updateAfterPost]);

  const handleOfferLoading = async () => {
    try {
      await getAccountItems({ _uid: user.uid }).then((res) =>
        setAccountItemsData(res.data)
      );
      setIsItemsLoaded(true);
    } catch (err) {
      setIsItemsLoaded(true)
      setErrorPlaceholder(err.toString())
      console.log(err);
    }
  };

  const handleUpdateAfterPost = () => {
    setIsItemsLoaded(false);
    setUpdateAfterPost(!updateAfterPost);
  };

  return (
    <section className="flex flex-col">
      <h1 className="text-center mb-10 text-5xl">Offer Supplies</h1>
      <div className="flex flex-col lg:flex-row justify-around">
        <OfferedAccountColumn
          errorPlaceholder={errorPlaceholder}
          refreshAfterEdit={refreshAfterEdit}
          modalDispatch={modalDispatch}
          isItemsLoaded={isItemsLoaded}
          accountItemsData={accountItemsData}
        />
        <PostItemForm handlePostFailure={handlePostFailure} handleUpdateAfterPost={handleUpdateAfterPost} />
      </div>
    </section>
  );
};

export default Offer;
