import axios from "axios";
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes";



export const getProductsRequest = ()=>{
  return {type: GET_PRODUCT_REQUEST}
}
export const getProductsSuccess = (payload)=>{
  return {type: GET_PRODUCT_SUCCESS,payload}
}
export const getProductsFailure = ()=>{
  return {type: GET_PRODUCT_FAILURE}
}

export const getProducts = () => {
  // Complete get products functionality here
  axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`).then((res)=>console.log(res.data))
  .catch((err) => console(err))
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getProducts = getProducts;
}
