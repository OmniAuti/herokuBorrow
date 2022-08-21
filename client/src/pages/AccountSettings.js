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
  const { user, updateUserEmail, reAuth } = UserAuth();
  const [submitEdit, setSubmitEdit] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false)

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
    setEditSuccess(false)
  }, [state.active])

  useEffect(() => {
    if (user === undefined) return;
    setUserEmail(user.email);
  }, [user, submitEdit]);

  const handleSettinsChangeSubmit = async (newInfo, rePassword) => {
    const cred = await handleReAuth(rePassword);
    await reAuth(cred);
    if (state.settingsType === "email") {
      await updateUserEmail(newInfo);
      setSubmitEdit(!submitEdit);
      setEditSuccess(true)
    }
    // if (state.settingsType === 'password') {
    //   updateUserEmail(newEmail);
    // }
  };

  return (
    <section className="pt-10">
      <p className="text-5xl underline underline-offset-3 text-center mb-10">Account Settings</p>

      <AccountSettingsModal
        settingsDispatch={settingsDispatch}
        modalState={state}
        userEmail={userEmail}
        handleSettinsChangeSubmit={handleSettinsChangeSubmit}
        editSuccess={editSuccess}
      />

      <div className="flex justify-around">
        <div className="text-center">
          <h2 className="my-2">Change Email</h2>
          <p>Current Email: {userEmail}</p>
          <button
            onClick={() => settingsDispatch({ type: "EMAIL" })}
            className="bg-sky-500 px-5 py-2 rounded-sm mt-5 hover:bg-sky-900"
          >
            Change Email
          </button>
        </div>

        <div className="text-center">
          <h2 className="my-2">Change Password</h2>
          <p className="text-black">Password</p>

          <button
            onClick={() => settingsDispatch({ type: "PASSWORD" })}
            className="bg-sky-500 px-5 py-2 rounded-sm mt-5 hover:bg-sky-900"
          >
            Change Password
          </button>
        </div>

        <div className="text-center">
          <h2 className="my-2">Delete Account</h2>
          <p className="text-black">Delete</p>
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
