import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ProtectedUserRouteVerified = ({ children }) => {
  const [verified, setVerified] = useState(true);
  const { user } = UserAuth();

  useEffect(() => {
    if (user === undefined || !user) return;
    setVerified(user.emailVerified);
  }, [user]);

  return verified === true ? (
    children
  ) : (
    <Navigate to="/account-needs-verification" />
  );
};

export default ProtectedUserRouteVerified;
