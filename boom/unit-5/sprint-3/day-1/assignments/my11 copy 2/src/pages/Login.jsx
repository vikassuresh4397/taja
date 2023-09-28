import React, { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/authReducer/action";
import { useDispatch, useSelector } from "react-redux";

export const Login=()=>{

    const dispatch = useDispatch();
    const {auth}=useSelector((store)=>store.authReducer)

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const handleSubmit = (e)=>{
        e.preventDefault();
           const userData={
            email,password,
           }
           console.log(userData)
  
        dispatch(login(userData));
           setEmail("");
           setPassword("");
    }

return(
    <DIV>
        <h3>{auth?"Login Successfull!!":"Login To Continue"}</h3>
        <h2>User Login</h2>
        <h3>{auth?"Login Successfull!!":"Login To Continue"}</h3>
        <form onSubmit={handleSubmit}>
            <input type="email"  placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="password"  placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
          
            <button type="submit">Submit</button>
        </form>
    </DIV>
)
}


const DIV = styled.div`

form{
    display:flex;
    flex-direction:column;
    gap:20px;
    border:1px solid black;
    padding:20px;
}

width:80%;
text-align:center;
justify-content:center;
margin:auto;

`;