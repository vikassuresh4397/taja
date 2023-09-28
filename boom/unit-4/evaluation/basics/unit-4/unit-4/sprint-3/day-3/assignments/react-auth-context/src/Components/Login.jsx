import React from 'react';
import {useState} from 'react'
import { Authcontext } from '../Context/AuthContextProvider';
import { Dashboard } from './Dashboard';
export default function Login() {
    const {isAuth,login,loading}=React.useContext(Authcontext);
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    function usernameChange(e){
        setUsername(e.target.value);
    }
    function passwordChange(e){
        setPassword(e.target.value);
    }
    function userLogin(e){
        e.preventDefault()
        login(username, password);
    }
    if(loading){
        return <Dashboard/>
    }else
    return (
        <div>
            <form data-testid = "auth_form"  >
                <input
                    type = "text"
                    data-testid = "email"
                    placeholder = "Enter Email"
                    value={username}
                    onChange={usernameChange}
                />
                <br />
                <input
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                    value={password}
                    onChange={passwordChange}
                />
                <br />
                {/* <input type = "submit" onSubmit={userLogin}/> */}
                <input type = "submit" value = "Submit" onClick={userLogin}/>
            </form>                
        </div>
    )
}
