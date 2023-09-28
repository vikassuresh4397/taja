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

export const login = () => {
  // Complete login Functionality
};


// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
