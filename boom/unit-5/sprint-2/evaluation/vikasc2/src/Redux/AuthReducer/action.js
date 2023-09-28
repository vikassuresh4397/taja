import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";
import axios from "axios";

const loginRequestAction=()=>{
  return {type:LOGIN_REQUEST}
}

const loginSuccessAction=(payload)=>{
  return {type:LOGIN_SUCCESS,payload}
}

const loginFailureAction=()=>{
  return {type:LOGIN_FAILURE}
}

export const login = (email,password) => (dispatch)=>{
  // Complete login Functionality
  const obj={
    email,password
  }
    dispatch(loginRequestAction())
    return axios.post(`https://reqres.in/api/login`,obj).then((res)=>{
      dispatch(loginSuccessAction(res.data.token))
    }).catch(()=>{
      dispatch(loginFailureAction())
    })
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.login = login;
}
