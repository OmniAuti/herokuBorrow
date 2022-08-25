import { useEffect, useState } from "react";
import { addBookmark } from "../api/api";
import { UserAuth } from "../context/AuthContext";
import Loading from "./Loading";

const SingleItemFocusModal = ({
  data,
  activeModal,
  handleCloseModal,
  handleOpenModal,
  modalLoaded,
  handleModalBookmark,
}) => {
  const { user } = UserAuth();
  const [bookmarkCheck, setBookmarkCheck] = useState(false);

  useEffect(() => {
    if (Object.values(data).length <= 0) return;
    handleOpenModal();
    handleBookmarkCheck();
    return () => {
      console.log("cleared");
    };
  }, [data]);

  const handleBookmark = async () => {
    var bookmark = { _uid: user.uid, postId: data._id };
    try {
      await addBookmark(bookmark).then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          handleModalBookmark();
        } else if (res.status >= 400 && res.status <= 499) {
          alert('Bookmark Failed. Try Again.')
        }
      });
    } catch (err) {
      alert('Bookmark Failed. Try Again.')
      console.log(err);
    }
  };

  const handleBookmarkCheck = async () => {
    if (data.bookmarked.indexOf(user.uid) >= 0) {
      setBookmarkCheck(true);
    } else {
      setBookmarkCheck(false);
    }
  };

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
          <div className="h-fit p-5 w-screen sm:w-[500px] bg-white rounded-tr-sm rounded-tl-sm relative">
            <div className="relative w-full h-fit min-h-[400px] rounded-md overflow-hidden py-2">
              <div className="h-52 max-h-52 min-h-52 w-full relative overflow-hidden">
                <div className="bg-black bg-opacity-80 w-fit absolute pr-10 pt-5 pb-24 -bottom-20 pl-40 -left-36 rounded-full text-2xl font-light">
                  {data.type.slice(0, 1).toUpperCase() + data.type.slice(1)}
                </div>
                <img
                  className="w-full h-full object-contain object-center"
                  src="./imgs/astockphoto.jpg"
                  alt=""
                />
              </div>
              <p className="text-black m-5 font-light max-w-[80%]">
                {" "}
                <span className=" text-black font-medium ">
                  Description:
                </span>{" "}
                {data.description}
              </p>

              <ul className="mt-5 ml-2 px-2">
                <li className="text-black m-1 mt-2 font-medium">
                  Quantity:{" "}
                  <span className="text-black font-light">{data.quantity}</span>
                </li>

                <li className="text-black m-1 mt-2 font-medium">
                  Condition:{" "}
                  <span className="text-black font-light">
                    {data.condition}
                  </span>{" "}
                </li>

                <li className="text-black m-1 mt-2 font-medium">
                  General Location:{" "}
                  <span className="text-black font-light">
                    {data.location.slice(0, 1).toUpperCase() +
                      data.location.slice(1)}
                  </span>
                </li>

                <li className="text-black m-1 mt-2 font-medium">
                  Zipcode:{" "}
                  <span className="text-black font-light">{data.zipcode}</span>
                </li>
              </ul>

              <div
                onClick={() => handleBookmark()}
                className="h-12 absolute rounded-full w-12 top-1/2 -right-1 cursor-pointer hover:scale-105"
              >
                {bookmarkCheck ? (
                  <img
                    className=""
                    src="/imgs/bookmarkBooked.svg"
                    alt="Add Post Icon"
                  />
                ) : (
                  <img
                    className=""
                    src="/imgs/bookmark.svg"
                    alt="Add Post Icon"
                  />
                )}
              </div>
            </div>

            <button className="bg-sky-500 w-full h-10 my-2 rounded-sm hover:bg-sky-900">
              Inquire
            </button>

            <button
              onClick={() => handleCloseModal()}
              className="w-full h-10 bg-gray-400 rounded-sm rounded-bl-sm hover:bg-gray-700"
            >
              Close
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

export default SingleItemFocusModal;
