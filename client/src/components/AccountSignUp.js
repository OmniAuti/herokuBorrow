const AccountSignUp = ({handleActiveSignUp, activeSignUp}) => {
  return (
    <div
      className={
        activeSignUp
          ? " flex flex-col items-center justify-center py-2 absolute top-[50px] w-full bg-white transition-all duration-500"
          : "transition-all duration-500 flex flex-col items-center justify-center py-2 absolute top-[290px] w-full bg-white"
      }
    >
      <div className="m-1 w-3/4">
        {activeSignUp ? (
          <p className="text-black text-2xl text-center border-b pb-2">Sign Up</p>
        ) : (
          <button
            onClick={handleActiveSignUp}
            className="text-black py-2 underline underline-offset-1 w-full"
          >
            No Account? Sign Up Here
          </button>
        )}
      </div>
      <form className="text-black w-3/4">
        <div className="flex flex-col my-1 py-2">
          <label htmlFor="email" className="text-black">
            Email
          </label>
          <input
            className="shadow-inner p-1 rounded-sm text-black my-1 border"
            id="email"
            type="email"
            placeholder="Supplies@BorrowAPencil.org"
          />
        </div>
        <div className="flex flex-col my-1 py-2">
          <label htmlFor="password-confirm" className="text-black">
            Password
          </label>
          <input
            className="shadow-inner p-1 rounded-sm text-black my-1 border"
            id="password-retype"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col my-1 py-2">
          <label htmlFor="password" className="text-black">
            Confirm Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Confirm Password"
            className="shadow-inner p-1 rounded-sm text-black my-1 border "
          />
        </div>

        <button className="border px-10 py-2 rounded-sm w-full my-1">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default AccountSignUp;
