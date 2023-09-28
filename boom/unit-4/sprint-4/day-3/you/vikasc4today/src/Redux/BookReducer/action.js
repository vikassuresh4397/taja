// export const getBooks = () => {

import axios from "axios";
import { BOOK_REQUEST_FAILURE, BOOK_REQUEST_PENDING, BOOK_REQUEST_SUCCESS, EDIT_REQUEST_SUCCESS } from "./actionTypes";

//   // Write logic hereBOOK
export const getBooks =(paramObj)=> (dispatch)=>{
    dispatch({type:BOOK_REQUEST_PENDING});
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books`,paramObj).then((res)=>{
        // console.log("product-wow",res.data);
        // console.log(res.data);
        dispatch({type:BOOK_REQUEST_SUCCESS,payload:res.data});
    }).catch((err)=>{
        console.error(err);
        dispatch({type: BOOK_REQUEST_FAILURE})
    });
    }

export const editBook = (id,data)=>(dispatch) => {
  // Write logic here
  console.log("data",data);
  axios.patch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/books/${id}`,data)
  .then(()=>{

    dispatch({type: EDIT_REQUEST_SUCCESS});
  }).catch((err)=>{
    dispatch({type: BOOK_REQUEST_FAILURE})
  })
};

if (window.Cypress) {
  window.getBooks = getBooks;
  window.editBook = editBook;
}
