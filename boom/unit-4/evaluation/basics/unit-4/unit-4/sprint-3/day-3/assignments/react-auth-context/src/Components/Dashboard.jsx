import React from 'react'
import { Authcontext } from '../Context/AuthContextProvider';
import Login from './Login';
export const Dashboard = () => {
    const {isAuth, token,error,setDefaultvalue}=React.useContext(Authcontext);
    function handlechange(){
        setDefaultvalue()
        // return <Login/>
    }
    return (
        <div >
            <h3 data-testid = "token" >Token: { token?token:error}</h3>
            <button data-testid = "logout" onClick={handlechange}>LOGOUT</button>
        </div>
    )
}
