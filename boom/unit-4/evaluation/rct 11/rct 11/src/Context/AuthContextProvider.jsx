
import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    var [isAuth, setisAuth] = useState(false);
    var [token, settoken] = useState(null)
    var loginUser = (token) => {
        setisAuth(true)
        settoken(token)
    }
    var logoutUser = () => {
        setisAuth(false)
        settoken(null)
        return <Navigate to="/login" />
    }
    return <AuthContext.Provider
        value={{ authState: { isAuth, token }, loginUser, logoutUser }}

    >{children}</AuthContext.Provider>
}

export default AuthContextProvider;
