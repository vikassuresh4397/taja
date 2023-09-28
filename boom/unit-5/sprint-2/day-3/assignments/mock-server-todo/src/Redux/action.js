//action creator functions here

import axios from "axios"
import { ADD_TODOS_ERROR, ADD_TODOS_REQUEST, ADD_TODOS_SUCCESS, GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./actionTypes"



// export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
// export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
// export const GET_TODOS_ERROR = "GET_TODOS_ERROR";

// export const ADD_TODOS_REQUEST = "ADD_TODOS_REQUEST";
// export const ADD_TODOS_SUCCESS = "ADD_TODOS_SUCCESS";
// export const ADD_TODOS_ERROR = "ADD_TODOS_ERROR";


export const getDataRequest = () => {
    return {type: GET_TODOS_REQUEST}
}
export const getDataSuccess = (payload) => {
    return {type: GET_TODOS_SUCCESS, payload}
}
export const getDataError = () => {
    return {type: GET_TODOS_ERROR}
}


export const postTodoRequest = () => {
    return {type: ADD_TODOS_REQUEST}
}
export const postTodoSuccess = (payload) => {
    return {type: ADD_TODOS_SUCCESS,payload}
}
export const postTodoError = () => {
    return {type: ADD_TODOS_ERROR}
}


export const getData = (dispatch) => {
    dispatch(getDataRequest())
    axios
      .get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`)
      .then((res) => {
        dispatch(getDataSuccess(res.data))
        // console.log(res.data);
      })
      .catch((er) => {
        dispatch(getDataError())
        // console.log(er);
      });
  };


  export  const addDataPost = (title) => (dispatch) => {
    const userData = {
      title,
      status: false,
    };

    dispatch(postTodoRequest());
    axios
      .post(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`,
        userData
      )
      .then((res) => {
        dispatch(postTodoSuccess(res.data));
        // console.log(res.data);
      })
      .catch((er) => {
        dispatch(postTodoError());
        console.log(er);
      });
  };