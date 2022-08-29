import { deleteSingleItem } from "../api/api";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const DeleteSinglePostModal = ({
  activeModalDelete,
  postId,
  handleCloseModal,
  handleItemRefreshAfterEdit,
}) => {
  const [postLoading, setPostLoading] = useState(false);
  const [deletionSuccess, setDeletionSuccess] = useState(false);

  useEffect(() => {
    if (activeModalDelete === false) {
      setDeletionSuccess(false);
    }
  }, [activeModalDelete]);

  const handleDeleteSinglePost = async () => {
    try {
      setDeletionSuccess(false);
      setPostLoading(true);
      // FIREBASE PHOTO DELTE ------------
      if (postId.modalId[1] === "offer" && postId.modalId[2].url !== "") {
        const storage = getStorage();
        const deleteRef = ref(storage, postId.modalId[2].imageRef);
        await deleteObject(deleteRef);
      }
      await deleteSingleItem(postId.modalId);
      setPostLoading(false);
      setDeletionSuccess(true);
      handleItemRefreshAfterEdit();
    } catch (err) {
      alert("Delete Item failed. Try to submit again.");
      console.log(err);
    }
  };

  return (
    <div
      className={
        activeModalDelete
          ? "fixed bg-black/50 z-50 w-full h-full top-0 left-0 right-0"
          : "fixed bg-black/50 z-50 w-full h-full top-0 left-0 right-0 hidden"
      }
    >
      {deletionSuccess ? (
        <div className="z-50 shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
          <div className="relative w-fit px-10 min-w-fit h-fit rounded-md overflow-hidden py-2">
            <img
              className="w-[150px] mx-auto my-10"
              src="/imgs/postsavedCheck.svg"
              alt="Post Edit Saved Successfully Icon"
            />
            <p className="text-black text-3xl mb-3 text-center">
              Deletion Successful
            </p>
            <button
              onClick={() => handleCloseModal()}
              className="w-full h-10 bg-gray-400 rounded-sm rounded-bl-sm hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="z-50 shadow-2xl p-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {postLoading ? (
            <Loading
              background={"bg-white"}
              outerBackground={"bg-black"}
              fontColor={"text-black"}
            />
          ) : (
            <div className="h-fit p-5 w-screen sm:w-[500px] bg-white rounded-sm relative">
              <div className="relative w-full h-fit rounded-md overflow-hidden py-2">
                <p className="text-black text-center text-xl">
                  Are you sure you want to delete this post?
                </p>
              </div>

              <button
                onClick={handleDeleteSinglePost}
                className="bg-sky-500 w-full h-10 my-2 rounded-sm hover:bg-sky-900"
              >
                Yes, Delete Post
              </button>

              <button
                onClick={() => handleCloseModal()}
                className="w-full h-10 bg-gray-400 rounded-sm rounded-bl-sm hover:bg-gray-700"
              >
                No, Disregard
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DeleteSinglePostModal;
