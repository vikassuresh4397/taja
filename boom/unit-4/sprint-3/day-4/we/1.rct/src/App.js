import React, { useContext } from 'react'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import { AuthContext } from './Context/AuthContextProvider'

const App = () => {
  const { isAuth, loading } = useContext(AuthContext)

  return (
    <div>
      {loading ? <div>Loading...</div> : isAuth ? <Dashboard /> : <Login />}
    </div>
  )
}

export default App
