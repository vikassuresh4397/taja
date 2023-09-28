// export const STUDENT_REQUEST_PENDING = "STUDENT_REQUEST_PENDING";
// export const STUDENT_REQUEST_FAILURE = "STUDENT_REQUEST_FAILURE";
// export const STUDENT_REQUEST_SUCCESS = "STUDENT_REQUEST_SUCCESS";

import axios from "axios";
import { STUDENT_REQUEST_FAILURE, STUDENT_REQUEST_PENDING, STUDENT_REQUEST_SUCCESS } from "./actionTypes";



// export const getProducts = (dispatch)=>{
//     dispatch({type:STUDENT_REQUEST_PENDING});
//     axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students`).then((res)=>{
//         // console.log("product-wow",res.data);

//         dispatch({type:STUDENT_REQUEST_SUCCESS,payload:res.data});
//     }).catch((err)=>{
//         console.error(err);
//         dispatch({type: STUDENT_REQUEST_FAILURE})
//     });
//     }

    export const getProducts =(paramObj)=> (dispatch)=>{
        dispatch({type:STUDENT_REQUEST_PENDING});
        axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students`,paramObj).then((res)=>{
            // console.log("product-wow",res.data);
            dispatch({type:STUDENT_REQUEST_SUCCESS,payload:res.data});
        }).catch((err)=>{
            // console.error(err);
            dispatch({type: STUDENT_REQUEST_FAILURE})
        });
        }
