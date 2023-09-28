import React,{ createContext, useState } from "react";
import { Navigate } from "react-router-dom";


export const AuthContext=React.createContext();



function AuthContextProvider({children}) {

    const [isAuth,setIsAuth]=useState(false);
    const [token,setToken]=useState(null);

    const loginUser=(token)=>{
        setIsAuth(true)
        setToken(token)
    }

    const logoutUser=()=>{
        setIsAuth(false)
        setToken(null)
        return <Navigate to="/login"/>
    }
   return <AuthContext.Provider value={{isAuth,loginUser,logoutUser,token}}>
    {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;
