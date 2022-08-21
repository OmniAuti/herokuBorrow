import { useState } from "react";

const AccountSettingsChangePasswordForm = ( {handleSettingsChangeSubmit }) => {

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        await handleSettingsChangeSubmit(newPassword, confirmPassword);
        setNewPassword("");
        setConfirmPassword("");
      } catch (e) {
        console.log(e);
      }
    };

  return (
    <form className="h-full text-black" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="newPassword" className="pl-2 text-black">
        Enter New Password
      </label>
      <input
      required
        id="newPassword"
        className="block my-1 mb-3 p-1 w-full border text-center rounded-md text-black"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        type="password"
        placeholder="New Password"
      />
      <label className="pl-2 text-black">Re-enter Password</label>
      <input
        required
        type="password"
        className="block text-black my-1 mb-3 p-1 w-full border text-center rounded-md "
        placeholder="Validation"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <input
        className="bg-sky-500 w-full h-10 my-2 text-black rounded-sm hover:bg-sky-900 cursor-pointer"
        type="submit"
        value="Submit Changes"
      />
    </form>
  );
};

export default AccountSettingsChangePasswordForm;
