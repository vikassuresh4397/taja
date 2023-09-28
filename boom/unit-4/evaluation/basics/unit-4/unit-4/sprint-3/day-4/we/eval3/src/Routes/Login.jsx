import { useContext } from "react";
import {Link} from "react-router-dom"
// import { AuthContext } from "../Context/AuthContext";
// import Navigate from "react-router-dom"
function Login() {
  // const {isAuth,loginUser}=useContext(AuthContext);
  // if(isAuth){
  //   return <Navigate to="/dashboard"/>
  // }
  return (
    <div>
      <form data-testid="login-form"
      //  onSubmit={loginUser}
       >
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
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
