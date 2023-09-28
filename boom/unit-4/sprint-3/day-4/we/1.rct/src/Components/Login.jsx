import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { setIsAuth, setToken, setLoading } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post('https://reqres.in/api/login', { email, password })
      const { token } = res.data
      setIsAuth(true)
      setToken(token)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <div>
      <form data-testid="auth_form" onSubmit={handleSubmit}>
        <input
          type="email"
          data-testid="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          data-testid="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {error && <p>{error}</p>}
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login
