import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../Redux/AuthReducer/action";
import { Navigate } from "react-router-dom";

export const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const authhai=useSelector((store)=>store.authReducer.isAuth);
  console.log("authhai",authhai);
  const dispatch=useDispatch();
  const HandleChange =()=>{
   const newData={
    email,
    password,
   }

   dispatch(login(newData));
  }


  if(authhai){
    return <Navigate to={"/cart"} />
  }


  return (
    <DIV>
      <h2>Log In</h2>
      <input data-testid="user-email" 
      type="email" placeholder="Email"
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
      <button data-testid="user-login" onClick={HandleChange}>Log In</button>
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
