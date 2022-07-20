import { useState } from "react";
import AccountSignUp from "./AccountSignUp";
import AccountSignIn from "./AccountSignIn";

const AccountGateway = () => {
  const [activeSignUp, setActiveSignUp] = useState(false);

  const handleActiveSignUp = () => {
    if (activeSignUp === true) {
      return;
    }
    setActiveSignUp(true);
  };
  const handleActiveSignIn = () => {
    if (activeSignUp === false) {
      return;
    }
    setActiveSignUp(false);
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="flex items-center justify-center flex-col">
      <div
        className={
          activeSignUp
            ? "mt-16 transition-[height] duration-500 bg-white w-96 py-2 rounded-sm relative h-[440px] overflow-hidden"
            : "mt-16 transition-[height] duration-500 bg-white w-96 py-2 rounded-sm relative h-[360px] overflow-hidden"
        }
      >
        <AccountSignIn
          handleActiveSignIn={handleActiveSignIn}
          activeSignUp={activeSignUp}
          handleSignInSubmit={handleSignInSubmit}
        />

        <AccountSignUp
          handleActiveSignUp={handleActiveSignUp}
          activeSignUp={activeSignUp}
          handleSignUpSubmit={handleSignUpSubmit}
        />
      </div>
    </section>
  );
};

export default AccountGateway;
