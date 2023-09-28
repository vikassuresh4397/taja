import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
     <div>Dashboard</div>
     <Link to="/login"><button>Login</button></Link>
     <Link to="/signup"><button>Sign Up</button></Link>
    </>
   
   
  )
}

export default Dashboard