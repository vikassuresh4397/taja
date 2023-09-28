import React, { useContext } from 'react'

import { AuthContext } from '../Context/AuthContextProvider'


const Dashboard = () => {
  const { token, setIsAuth } = useContext(AuthContext)

  const handleLogout = () => {
    setIsAuth(false)
  }

  return (
    <div >
      <h3 data-testid="token">Token: {token}</h3>
      <button data-testid="logout" onClick={handleLogout}>LOGOUT</button>
    </div>
  )
}

export default Dashboard
