import axios from "axios";
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes";

const getProductRequestAction=()=>{
   return {type:GET_PRODUCT_REQUEST}
}
const getProductSuccessAction=(payload)=>{
 return {type:GET_PRODUCT_SUCCESS,payload}
}

const getProductFailureAction=()=>{
  return {type:GET_PRODUCT_FAILURE}
}

export const getProducts = (dispatch,order) => {
  // Complete get products functionality here
  //  console.log(order)
    if(order){
      dispatch(getProductRequestAction())
      axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products?_sort=discountPercentage&_order=${order}`).then((res)=>{
        dispatch(getProductSuccessAction(res.data))
      }).catch((err)=>{
        getProductFailureAction()
      })
    }
    else{
      dispatch(getProductRequestAction())
      axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`).then((res)=>{
          dispatch(getProductSuccessAction(res.data))
        }).catch((err)=>{
          getProductFailureAction()
        })
    }
};


// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.getProducts = getProducts;
}
