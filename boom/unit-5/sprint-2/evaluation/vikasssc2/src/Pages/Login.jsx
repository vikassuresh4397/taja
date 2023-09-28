import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
export const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch=useDispatch

const handleLogin = ()=>{
  let userData ={email,password};
  setEmail("");
  setPassword("");
}



  return (
    <div>
      <h2>Log In</h2>
      <input data-testid="user-email" type="email" placeholder="Email" 
      value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        value={password} onChange={(e)=>setPassword(e.target.value)}
      />
      <button data-testid="user-login" onClick={handleLogin}>Log In</button>
    </div>
  );
};

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
