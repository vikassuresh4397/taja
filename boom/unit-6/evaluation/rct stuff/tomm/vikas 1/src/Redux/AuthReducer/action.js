import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const loginRequest = ()=>{
  return {type:LOGIN_REQUEST}
}

export const loginSuccess = (payload)=>{
  return {type:LOGIN_SUCCESS,payload}
}

export const loginFailure = ()=>{
  return {type:LOGIN_FAILURE}
}


export const login = (newData) => (dispatch)=>{
   dispatch(loginRequest())
   axios.post("https://reqres.in/api/login",newData).then((res)=>{
    dispatch(loginSuccess(res.data.token))
    console.log(res.data.token)
   }).catch((err)=>{
    dispatch(loginFailure());
    console.log(err)
   })
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
