import React, { Children } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext=React.createContext();


function AuthContextProvider({children}) {
    const [isAuth,setisAuth]=useState(false);
    const [token,setToken]=useState(null);

    const loginUser=(token)=>{
        // e.preventDefault()
        setisAuth(true);
        setToken(token)
    }
    const logoutUser=()=>{
        setisAuth(false)
        setToken(null)
       return <Navigate path="/login"/>
    }
    return <AuthContext.Provider value={{isAuth,token,loginUser,logoutUser}} >{children}</AuthContext.Provider>
}
export default AuthContextProvider;
