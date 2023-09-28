// export const LOGIN_REQUEST = "LOGIN_REQUEST";
// export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
// export const LOGIN_FAILURE = "LOGIN_FAILURE";
import axios from "axios"
import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAILURE } from "./actionTypes"


const loginRequest=()=>{
  return {type: LOGIN_REQUEST}
}

const loginSuccess=(payload)=>{
  return {type: LOGIN_SUCCESS,payload}
}

const loginFailure=()=>{
  return {type: LOGIN_FAILURE}
}

export const login =(loginData)=> (dispatch) => {
  // Complete the login functionality
dispatch(loginRequest());
axios.post("https://reqres.in/api/login",loginData).then((res)=>{
  dispatch(loginSuccess(res.data));
}).catch((err)=>{
  dispatch(loginFailure());
})

};
