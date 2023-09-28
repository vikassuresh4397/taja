import React, { useState} from 'react'
import Login from '../Components/Login';

export const Authcontext=React.createContext()
export default function AuthContextProvider({children}) {

  const [isAuth,setIsAuth]=useState(false);
  const [loading,setloading]=useState(false);
  const [error,seterror]=useState(null);
  const [token,settoken]=useState("");
  return (
    <Authcontext.Provider>{children}</Authcontext.Provider>
  )
}
