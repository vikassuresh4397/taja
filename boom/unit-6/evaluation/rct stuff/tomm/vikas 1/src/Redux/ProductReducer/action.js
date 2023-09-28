import axios from "axios"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes" 

export const productRequest = ()=>{
  return {type:GET_PRODUCT_REQUEST}
}

export const productSuccess = (payload)=>{
  return {type:GET_PRODUCT_SUCCESS,payload}
}

export const productFailure = ()=>{
  return {type:GET_PRODUCT_FAILURE}
}
export const getProducts =(paramObj)=> (dispatch) => {
  // Complete get products functionality here
  dispatch(productRequest());
  axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`,paramObj).then((res)=>{
    dispatch(productSuccess(res.data))
    console.log("wow",res.data)
  }
  ).catch((err)=>{
    dispatch(productFailure())
    console.log(err)
  });
};
// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getProducts = getProducts;
}

