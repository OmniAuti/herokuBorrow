import { deleteSingleItem } from "../api/api";

const DeleteSinglePostModal = ({
  activeModalDelete,
  postId,
  handleCloseModal,
  handleItemRefreshAfterEdit,
}) => {
  const handleDeleteSinglePost = async () => {
    try {
      await deleteSingleItem(postId).then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          handleItemRefreshAfterEdit();
          handleCloseModal();
        } else if (res.status >= 400 && res.status <= 499)
          alert("Delete Item failed. Try to submit again.");
        return;
      });
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
      <div className="z-50 shadow-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-fit p-5 w-screen sm:w-[500px] bg-white rounded-tr-sm rounded-tl-sm relative">
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
      </div>
    </div>
  );
};

export default DeleteSinglePostModal;
