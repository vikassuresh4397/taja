import React, { useState } from "react";
import styled from "styled-components";
import {login} from "../Redux/AuthReducer/action"
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
        <h2>Log In</h2>
        <h3>{auth?"Login Successfull!!":"Login To Continue"}</h3>
        <form onSubmit={handleSubmit}>
            <input data-testid="user-email" type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input data-testid="user-password" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
          
            <button data-testid="user-login" type="submit">Log In</button>
        </form>
    </DIV>
)
}


const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
