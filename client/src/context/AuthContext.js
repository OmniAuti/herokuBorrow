import { useContext, createContext, useState, useEffect } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendSignInLinkToEmail
} from "firebase/auth";
import { auth } from "../firebase";

const UserContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const createUser = async (email, password) => {

    const ActionCodeSettings = {url: "http://localhost:3000/dashboard",handleCodeInApp: true,}
    await createUserWithEmailAndPassword(auth, email, password);
    await sendSignInLinkToEmail(auth, email, ActionCodeSettings)
    return console.log('check email')
  };

  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    return signOut(auth);
  };

  return (
    <UserContext.Provider value={{ user, createUser, logInUser, logOutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthContextProvider;
// THIS IS WHAT IS IMPORTED AND USED AS A OBJECT/FUNCTION
export const UserAuth = () => {
  return useContext(UserContext);
};
