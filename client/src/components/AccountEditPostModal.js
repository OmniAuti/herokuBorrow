import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import Loading from "./Loading";

import ModalEditAsk from "./ModalEditAsk";
import ModalEditOffer from "./ModalEditOffer";

const AccountEditPostModal = ({
  data,
  activeModal,
  handleCloseModal,
  handleOpenModal,
  modalLoaded,
  handleItemRefreshAfterEdit,
}) => {
  const [editSaved, setEditSaved] = useState(false);

  const { user } = UserAuth();

  useEffect(() => {
    if (data.length === 0 || data === undefined) return;
    if (Object.values(data).length <= 0) return;
    handleOpenModal();
    return () => {
      console.log("cleared");
    };
  }, [data]);

  useEffect(() => {
if (activeModal === false) {
  setEditSaved(false)
}
  }, [activeModal])

  const handleEditSuccess = () => {
    setEditSaved(true)
  }
  const handleEditSuccessModalClose = () => {
    setEditSaved(false)
  }

  return (
    <div
      className={
        activeModal
          ? "fixed bg-black/50 z-50 w-full h-full top-0 left-0 right-0"
          : "fixed bg-black/50 z-50 w-full h-full top-0 left-0 right-0 hidden"
      }
    >
      {modalLoaded ? (
        <div className="z-50 shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-fit w-screen sm:w-[500px] bg-white p-5 rounded-tr-sm rounded-tl-sm relative text-center">
            {editSaved ? (
              <div>
                <img className="w-[100px] mx-auto my-5" src="/imgs/postsavedCheck.svg" alt="Post Edit Saved Successfully Icon"/>
                <p className="text-black text-center text-2xl my-5">Edit Successfully Saved</p>
              </div>
            ) : (
              <div className="relative w-full h-fit rounded-md overflow-hidden">
                {data.postType === "offer" ? (
                  <ModalEditOffer
                    handleOpenModal={handleOpenModal}
                    handleCloseModal={handleCloseModal}
                    user={user}
                    handleItemRefreshAfterEdit={handleItemRefreshAfterEdit}
                    data={data}
                    handleEditSuccess={handleEditSuccess}
                    handleEditSuccessModalClose={handleEditSuccessModalClose}
                  />
                ) : (
                  <ModalEditAsk
                    handleOpenModal={handleOpenModal}
                    handleCloseModal={handleCloseModal}
                    user={user}
                    handleItemRefreshAfterEdit={handleItemRefreshAfterEdit}
                    data={data}
                    handleEditSuccess={handleEditSuccess}
                    handleEditSuccessModalClose={handleEditSuccessModalClose}
                  />
                )}
              </div>
            )}

            <button
              onClick={() => handleCloseModal()}
              className="w-full h-10 bg-gray-400 rounded-sm rounded-bl-sm hover:bg-gray-700"
            >
              {editSaved ? "Close" : "Discard Changes"}
            </button>
          </div>
        </div>
      ) : (
        <Loading
          background={"bg-white"}
          outerBackground={"bg-black"}
          fontColor={"text-black"}
        />
      )}
    </div>
  );
};

export default AccountEditPostModal;
