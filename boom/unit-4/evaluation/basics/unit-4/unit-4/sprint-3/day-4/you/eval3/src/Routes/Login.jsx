import { useContext, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
function Login() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const {loginUser} =useContext(AuthContext);
  const navigate= useNavigate()
  const handleInput=(e)=>{
    setUsername(e.target.value)
  }
  const handleInput1=(e)=>{
    setPassword(e.target.value);
  }

    // username=document.querySelector('.email-input').value
    // password=document.querySelector('.password-input').value
    

   async function login(e){
    e.preventDefault()
    try {
      const login_api='https://reqres.in/api/login';
      const response=await fetch(login_api,{
      method:'POST',
      body:JSON.stringify({
        username,password
      }),
      headers:{
        'Content-Type':"application/json",
      }
    })
    const data=await response.json();
    loginUser(data.token);
    console.log(34,data.token)
    if(data.token){
    navigate("/dashboard")
    }
    } catch (error) {
      loginUser(null);
    }
}

  return (
    <div>
      <form data-testid="login-form"
      onSubmit={(e)=>login(e)}
       >
        <div>
          <label>
            Email
            <input className="p" data-testid="email-input" type="email" placeholder="email"
            value={username}
            onChange={handleInput}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input className="pp"
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={handleInput1}             
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
