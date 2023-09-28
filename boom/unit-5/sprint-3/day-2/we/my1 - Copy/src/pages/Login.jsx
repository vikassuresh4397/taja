import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authReducer/action';
import { useLocation, useNavigate } from 'react-router-dom';

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
    <div>
    <h2>{auth?"Login Successful":"Login to continue"}</h2>
    
        <div>Login</div>
  
    <div><input 
    placeholder='email' 
    type="email" value={email}
     onChange={(e)=>setEmail(e.target.value)}>
      </input></div>


    <div><input 
     placeholder='password'
      type="password"
       value={password} 
       onChange={(e)=>setPassword(e.target.value)}>
    </input></div>

    <button type="submit" onClick={handleLogin}>Login</button>
  
    </div>

  )
}
