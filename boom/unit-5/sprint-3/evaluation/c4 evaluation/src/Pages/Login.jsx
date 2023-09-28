import styled from "styled-components";
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../redux/authReducer/action';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from "../Redux/AuthReducer/action";

export const Login = () => {
  const auth = useSelector((store)=>store.authReducer.isAuth);

// console.log("auth",auth);
 
const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
const location =useLocation();

// console.log("login - location",location)

const handleLogin=()=>{
 const userData={
  email,
  password,
 };
 dispatch(login(userData)).then((res)=>{
  navigate(location.state);
 })
};
  return (
    <DIV>
      <h2>Log In</h2>
      <input 
      data-testid="user-email" 
      type="email" 
      placeholder="Email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password"
        value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <button data-testid="user-login"  onClick={handleLogin}>Log In</button>
    </DIV>
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
