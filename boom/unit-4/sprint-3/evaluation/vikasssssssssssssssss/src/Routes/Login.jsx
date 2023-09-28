import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router-dom";
function Login() {
  const { loginUser } = useContext(AuthContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  async function login(e) {
    e.preventDefault()
    setIsSubmitted(true)
    const Api = "https://reqres.in/api/login"
    try {
      const data = await fetch(Api, {
        method: "POST",
        body: JSON.stringify({
          email, password
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const response = await data.json()
      loginUser(response.token)
      if (response.token) {
        navigate("/dashboard")
      }
    } catch (error) {
      console.log(error)
      loginUser(null)
    }
  }

  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={(e) => login(e)} >
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email"
              value={email}
              onChange={handleEmail}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={handlePassword}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit" disabled={isSubmitted} >
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