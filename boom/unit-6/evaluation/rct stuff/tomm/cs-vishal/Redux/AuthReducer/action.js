// export const LOGIN_REQUEST = "LOGIN_REQUEST";
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGIN_FAILURE = "LOGIN_FAILURE";

import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";


const loginRequest = () => {
  return {type: LOGIN_REQUEST}
}
const loginSuccess = (payload) => {
  return {type: LOGIN_SUCCESS, payload}
}
const loginFailure = () => {
  return {type: LOGIN_FAILURE}
}


export const login = (useData) => (dispatch) => {
  // Complete login Functionality
  dispatch(loginRequest())
  axios.post("https://reqres.in/api/login",useData).then((res)=>{
    // console.log(res.data)
    dispatch(loginSuccess(res.data.token))
  }).catch((er)=>{
    console.log(er)
    dispatch(loginFailure())
  })
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
