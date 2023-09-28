import React, {useState} from 'react'

export const Authcontext=React.createContext();

export default function AuthContextProvider({children}) {

  const [isAuth,setisAuth]=useState(false);
  const [loading,setloading]=useState(false);
  const [error,setError]=useState(null);
  const [token,setToken]=useState("");


  function setDefaultvalue(){
      setToken(token!=undefined?"":token);
      setError(error!=null?null:error);
      setloading(loading===false?true:false);
      setisAuth(isAuth==false?true:false)
  }

  const getData =(payload)=>{
    const url = "https://reqres.in/api/login";
    const other_params = {
        headers : { "content-type" : "application/json; charset=UTF-8" },
        body : JSON.stringify(payload),
        method : "POST",
        mode : "cors"
    };

    fetch(url, other_params).then((res)=>res.json()).then((res)=>{
      setToken(res.token);
      console.log(res.token)
      setError(res.error);
      setisAuth(true);
      setloading(true)
    }).catch((error)=>{
      setloading(false)
    })
      
    
    
  }
  // console.log(token)
  

  const login=(username, password)=>{
    // api call with post method and body as email and password
    const payload = {
      "email": username,
      "password": password
    }
    getData(payload)
  }
  const logout=()=>{
    setisAuth(false)
  }



  return (
    <Authcontext.Provider value={{isAuth,logout,login,token,error,loading,setDefaultvalue}} >{children}</Authcontext.Provider>
  )
}
