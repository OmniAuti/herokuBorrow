const AccountSignIn = ({handleActiveSignIn, activeSignUp, handleSignInSubmit}) => {
    return (

      <div className="flex flex-col items-center justify-center py-2  w-full">
      <div className="m-1 w-full text-center">
        {activeSignUp ? <button onClick={handleActiveSignIn} className="text-black underline underline-offset-0 text-center w-full">Already Have An Account? Sign In Here</button> : <p className="text-black text-2xl border-b pb-2 w-3/4 mx-auto text-center">Sign In</p>}
      </div>
      <form className="text-black w-3/4">
        <div className="flex flex-col my-1 py-2">
          <label htmlFor="inemail" className="text-black">
            Email
          </label>
          <input
            className="shadow-inner p-1 rounded-sm text-black my-1 border"
            id="inemail"
            type="email"
            placeholder="Supplies@BorrowAPencil.org"
          />
        </div>
        <div className="flex flex-col my-1 py-2">
          <label htmlFor="inpassword" className="text-black">
            Password
          </label>
          <input
            className="shadow-inner p-1 rounded-sm text-black my-1 border"
            id="inpassword-retype"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="border py-2 rounded-sm w-full my-1">
          Sign In
        </button>
      </form>
    </div>
    )
}

export default AccountSignIn;