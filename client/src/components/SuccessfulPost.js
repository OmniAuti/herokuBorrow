const SuccessfulPost = ({ handleCloceSuccessfulPost }) => {
  return (
    <div className="h-fit p-3 w-screen sm:w-[400px] mx-auto bg-white rounded-sm ">
      <div className="relative w-full h-fit rounded-md overflow-hidden py-2">
        <img
          className="w-[150px] mx-auto my-10"
          src="/imgs/postsavedCheck.svg"
          alt="Post Edit Saved Successfully Icon"
        />
        <p className="text-black text-3xl mb-3">Post Successful</p>
        <button
          onClick={handleCloceSuccessfulPost}
          className="w-full h-10 bg-gray-400 rounded-sm rounded-bl-sm hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessfulPost;
