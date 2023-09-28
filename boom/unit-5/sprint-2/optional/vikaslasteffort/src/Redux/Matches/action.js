// export const GET_MATCH_REQUEST = "GET_PRODUCT_REQUEST";
// export const GET_MATCH_SUCCESS = "GET_PRODUCT_SUCCESS";
// export const GET_MATCH_FAILURE = "GET_PRODUCT_FAILURE";



import axios from "axios"
import { GET_MATCH_FAILURE, GET_MATCH_REQUEST, GET_MATCH_SUCCESS } from "./actionTypes" 

export const productRequest = ()=>{
  return {type:GET_MATCH_REQUEST}
}

export const productSuccess = (payload)=>{
  return {type:GET_MATCH_SUCCESS,payload}
}

export const productFailure = ()=>{
  return {type:GET_MATCH_FAILURE}
}
export const getMatches =(paramObj)=> (dispatch) => {

  // Complete get products functionality here
  dispatch(productRequest());
  axios.get(`http://localhost:8080/matches`,paramObj).then((res)=>{
    dispatch(productSuccess(res.data))
    console.log("wow",res.data)
  }
  ).catch((err)=>{
    dispatch(productFailure())
    console.log(err)
  });
};
// // NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
// if (window.Cypress) {
//   window.getProducts = getMatches;
// }






