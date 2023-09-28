
// export const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
// export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
// export const GET_PRODUCT_FAILURE = "GET_PRODUCT_FAILURE";

import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes";
import axios from "axios"


export const getDataRequest = () => {
  return {type: GET_PRODUCT_REQUEST}
}
export const getDataSuccess = (payload) => {
  return {type: GET_PRODUCT_SUCCESS,payload}
}
export const getDataFailure = () => {
  return {type: GET_PRODUCT_FAILURE}
}


export const getProducts =(paramObj) => (dispatch) => {
  // Complete get products functionality here
  dispatch(getDataRequest())
  axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`,paramObj).then((res)=>{
    // console.log(res.data)
    dispatch(getDataSuccess(res.data))
  }).catch((er)=>{
    console.log(er)
    dispatch(getDataFailure())
  })
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getProducts = getProducts;
}
