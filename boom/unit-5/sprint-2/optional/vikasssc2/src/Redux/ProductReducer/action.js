import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes";

export const getProducts = () => {
  // Complete get products functionality here
  return {type: GET_PRODUCT_REQUEST}
};

export const getProductSuccess = (payload) => {
  return {type: GET_PRODUCT_SUCCESS, payload}
}



        export const getProductFailure = () => {
  return {type : GET_PRODUCT_FAILURE}
}

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getProducts = getProducts;
}