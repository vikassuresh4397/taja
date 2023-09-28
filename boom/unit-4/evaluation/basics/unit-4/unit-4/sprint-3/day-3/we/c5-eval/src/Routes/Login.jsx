import { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {AuthContext} from "../Context/AuthContext"
function Login() {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const {loginUser}=useContext(AuthContext)
  const [disableSubmit, setSubmit] = useState(false);
  const navigate=useNavigate()
  const HandleInput=(e)=>{
    setUsername(e.target.value)
  }
  const HandleInput1=(e)=>{
    setPassword(e.target.value)
  }

  async function login(e){
    e.preventDefault()
    setSubmit(true);
    try {
      const login_api="https://reqres.in/api/login";
      const response=await fetch(login_api,{
        method:'POST',
        body:JSON.stringify({
          username,password
        }),
        headers:{
          'Content-Type':'application/json'
        }
        })
        const data=await response.json()
        loginUser(data?.token)
        if(data?.token){
          navigate("/dashboard")
        }
    } catch (err) {
      loginUser(null)
    }
  }


  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={(e)=>login(e)}>
        <div>
          <label>
            <input data-testid="email-input"
             type="email"
              placeholder="email"
              value={username}
              onChange={HandleInput}
              />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              value={password}
              placeholder="password"
              onChange={HandleInput1}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit" disabled = {disableSubmit}>
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
