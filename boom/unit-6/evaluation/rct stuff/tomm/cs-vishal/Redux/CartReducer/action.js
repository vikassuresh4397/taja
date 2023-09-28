import axios from "axios";
import { ADD_TO_CART } from "./actionTypes";

export const addCartAction = (payload) => {
  return {type: ADD_TO_CART, payload}
}



export const addToCart = (id) => (dispatch) => {
  // Complete add to cart store functionality
  axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`).then((res)=>{
    // console.log(res.data)
    dispatch(addCartAction(res.data))
  }).catch((er)=>{
    console.log(er)
  })
};

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.addToCart = addToCart;
}
