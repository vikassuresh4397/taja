import React, { useState } from "react";

export const Auth = ({children}) =>{
    const [auth] = useState(true);
    if(auth){
       return children
    }else{
        return (<h1>Login to page</h1>)
    }
}