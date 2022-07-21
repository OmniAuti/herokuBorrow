import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedUserRoute = ({children}) => {

    const {user} = UserAuth()
    console.log(user)
    
    return user !== null ? children : <Navigate to="/account-gateway"/>;
}

export default ProtectedUserRoute;