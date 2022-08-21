import AccountSettingsModal from "../components/AccountSettingsModal";

import { UserAuth } from "../context/AuthContext";
import { useState, useEffect, useReducer } from "react";
import { EmailAuthProvider } from "firebase/auth";

const settingsReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL":
      return { settingsType: "email", active: true };
    case "PASSWORD":
      return { settingsType: "password", active: true };
    case "DELETE":
      return { settingsType: "delete", active: true };
    case "CLOSE":
      return { settingsType: "", active: false };
  }
};

const AccountSettings = () => {
  const {
    user,
    updateUserEmail,
    updateUserPassword,
    deleteUserAndAllPosts,
    reAuth,
  } = UserAuth();
  const [submitEdit, setSubmitEdit] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);

  const [state, settingsDispatch] = useReducer(settingsReducer, {
    settingsType: "",
    active: false,
  });

  const [userEmail, setUserEmail] = useState("");

  const handleReAuth = async (providedP) => {
    const cred = EmailAuthProvider.credential(user.email, providedP);
    return cred;
  };

  useEffect(() => {
    setEditSuccess(false);
  }, [state.active]);

  useEffect(() => {
    if (user === undefined) return;
    setUserEmail(user.email);
  }, [user, submitEdit]);

  const handleSettingsChangeSubmit = async (newInfo, rePassword) => {
    const cred = await handleReAuth(rePassword);
    await reAuth(cred);
    if (state.settingsType === "email") {
      await updateUserEmail(newInfo);
      setSubmitEdit(!submitEdit);
      setEditSuccess(true);
    }
    if (state.settingsType === "password") {
      await updateUserPassword(newInfo);
      setSubmitEdit(!submitEdit);
      setEditSuccess(true);
    }
    if (state.settingsType === "delete") {
      await deleteUserAndAllPosts();
      setSubmitEdit(!submitEdit);
      setEditSuccess(true);
    }
  };

  return (
    <section className="pt-10">
      <p className="text-5xl underline underline-offset-3 text-center mb-10 font-light">
        Account Settings
      </p>

      <AccountSettingsModal
        settingsDispatch={settingsDispatch}
        modalState={state}
        userEmail={userEmail}
        handleSettingsChangeSubmit={handleSettingsChangeSubmit}
        editSuccess={editSuccess}
      />

      <div className="flex justify-around flex-col md:flex-row">
        <div className="text-center my-10">
          <img
            className="w-[100px] mx-auto my-10"
            src="/imgs/emailChange.svg"
            alt="Change Email Icon"
          />{" "}
          <button
            onClick={() => settingsDispatch({ type: "EMAIL" })}
            className="bg-sky-500 px-5 py-2 rounded-sm mt-5 hover:bg-sky-900"
          >
            Change Email
          </button>
        </div>

        <div className="text-center my-10">
          <img
            className="w-[100px] mx-auto my-10"
            src="/imgs/passwordChange.svg"
            alt="Change Password Icon"
          />
          <button
            onClick={() => settingsDispatch({ type: "PASSWORD" })}
            className="bg-sky-500 px-5 py-2 rounded-sm mt-5 hover:bg-sky-900"
          >
            Change Password
          </button>
        </div>

        <div className="text-center my-10">
          <img
            className="w-[100px] mx-auto my-10"
            src="/imgs/deleteAccount.svg"
            alt="Delete Account Icon"
          />
          <button
            onClick={() => settingsDispatch({ type: "DELETE" })}
            className="bg-sky-500 px-5 py-2 rounded-sm mt-5 hover:bg-sky-900"
          >
            Delete Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccountSettings;
