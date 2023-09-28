import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const auth=useSelector((store)=>store.authReducer.isAuth);
const location =useLocation();

// console.log("private router - location",location)
  return (
    auth ? children:<Navigate state={location.pathname} to={"/login"} />
    )

}

export default PrivateRoute