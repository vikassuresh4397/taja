


import axios from "axios"
import {GET_MATCH_FAILURE, GET_MATCH_REQUEST, GET_MATCH_SUCCESS } from "./actionTypes"


export const getDataRequest = () => {
  return {type:GET_MATCH_REQUEST}
}
export const getDataSuccess = (payload) => {
  return {type:  GET_MATCH_SUCCESS,payload}
}
export const getDataFailure = () => {
  return {type:GET_MATCH_FAILURE}
}


export const getMatches =(paramObj) => (dispatch) => {
  // Complete get products functionality here
  dispatch(getDataRequest())
  axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/matches`,paramObj).then((res)=>{
    // console.log(res.data)
    dispatch(getDataSuccess(res.data))
  }).catch((er)=>{
    console.log(er)
    dispatch(getDataFailure())
  })
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getMatches = getMatches;
}
