import React, { Children } from "react";
import { useState } from "react";

export const AuthContext=React.createContext();


function AuthContextProvider({children}) {
    const [isAuth,setisAuth]=useState(false);
    const [token,setToken]=useState(null);

    const loginUser=()=>{
        setisAuth(true);
        // setToken()
    }
    // const

    return <AuthContext.Provider value={{isAuth,token}} >{children}</AuthContext.Provider>
}

export default AuthContextProvider;
