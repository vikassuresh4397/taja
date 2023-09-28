
import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const login=(userData)=>(dispatch)=>{
dispatch({type:LOGIN_REQUEST})
return axios.post("https://reqres.in/api/login",userData).then((res)=>{
    // console.log(res.data.token);
    dispatch({type:LOGIN_SUCCESS,payload:res.data.token});
}).catch((err)=>{
    console.log(err.message);
    dispatch({type:LOGIN_FAILURE,payload: err.message})
})
}

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
