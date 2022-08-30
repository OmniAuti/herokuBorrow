const UnSuccessfulPost = ({ handlePostFailureClose }) => {
  return (
    <div className="bg-black absolute w-full h-full flex items-center justify-center z-50">
      <div className="h-fit p-3 w-screen -ml-5 sm:w-[400px] sm:mx-auto bg-white rounded-sm ">
        <div className="relative w-full h-fit rounded-md overflow-hidden py-2">
          <img
            className="w-[150px] mx-auto my-10"
            src="/imgs/error.svg"
            alt="Post Edit Saved Successfully Icon"
          />
          <p className="text-black text-3xl mb-3">
            Sorry, I seem to have broken. Try Again!
          </p>
          <button
            onClick={handlePostFailureClose}
            className="w-full h-10 bg-gray-400 rounded-sm rounded-bl-sm hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnSuccessfulPost;
