import axios from "axios";
import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType";

export const addProduct = (newProduct)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST});
    axios.post(`http://localhost:8080/products`,newProduct).then((res)=>{
        // console.log(res.data);
        dispatch({type:POST_PRODUCT_SUCCESS})
    }).catch((err)=>{
        console.error(err);
        dispatch({type:PRODUCT_FAILURE})
    });
}

export const getProducts =(paramObj)=> (dispatch)=>{
dispatch({type:PRODUCT_REQUEST});
axios.get(`http://localhost:8080/products`,paramObj).then((res)=>{
    // console.log("product-wow",res.data);
    dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data});
}).catch((err)=>{
    console.error(err);
    dispatch({type:PRODUCT_FAILURE})
});
}