import { useState, useRef } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AccountSignUp = ({ handleActiveSignUp, activeSignUp }) => {
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signUpError, setSignUpError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const confirmedCheck = useRef();

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return alert("Please confirm that passwords match");
    }
    try {
      await createUser(email, password);
      setSignUpError(false);
      setErrorMsg("");
      navigate("/dashboard");
    } catch (e) {
      console.log(e);
      const erro = e.toString().slice(25, 58);
      setErrorMsg(erro);
      setSignUpError(true);
    }
  };

  const handleConfirmedPassword = () => {
    if (password !== confirmPassword) {
      confirmedCheck.current.style.outline = "2px solid #ef4444";
      confirmedCheck.current.style.outlineOffset = "2px";
    } else if (password === confirmPassword) {
      confirmedCheck.current.style.outline = "2px solid #22c55e";
      confirmedCheck.current.style.outlineOffset = "2px";
    }
  };

  return (
    <div
      className={
        activeSignUp
          ? " flex flex-col items-center justify-center py-2 absolute top-[50px] w-full bg-white transition-all duration-500"
          : "transition-all duration-500 flex flex-col items-center justify-center py-2 absolute top-[295px] w-full bg-white"
      }
    >
      <div className="m-1 w-3/4">
        {activeSignUp ? (
          <>
            <p className="text-black text-2xl text-center border-b pb-2">
              Sign Up
            </p>

            {signUpError && (
              <p className="text-red-500 bg-white text-center absolute font-thin w-full translate-x-[-50%] left-[50%]">
                {errorMsg}
              </p>
            )}
          </>
        ) : (
          <button
            onClick={handleActiveSignUp}
            className="text-black py-2 underline underline-offset-1 w-full"
          >
            No Account? Sign Up Here
          </button>
        )}
      </div>
      <form
        onSubmit={(e) => handleSignUpSubmit(e)}
        className="text-black w-3/4"
      >
        <div className="flex flex-col mb-1 mt-2 py-2">
          <label htmlFor="email" className="text-black">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            className="shadow-inner p-1 rounded-sm text-black my-1 border"
            id="password-confirm"
            type="password"
            placeholder="Password"
            minLength={6}
          />
        </div>
        <div className="flex flex-col my-1 py-2">
          <label htmlFor="password" className="text-black">
            Confirm Password
          </label>
          <input
            ref={confirmedCheck}
            onKeyUp={handleConfirmedPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="Confirm Password"
            className="shadow-inner p-1 rounded-sm text-black my-1 border "
            minLength={6}
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
