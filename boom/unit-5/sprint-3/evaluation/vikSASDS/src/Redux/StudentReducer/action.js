import { GET_STUDENT_REQUEST_SUCCESS, STUDENT_REQUEST_FAILURE, STUDENT_REQUEST_PENDING, STUDENT_REQUEST_SUCCESS } from "./actionTypes"

export const student = (data) => (dispatch)=>{
    dispatch({type:STUDENT_REQUEST_PENDING})
    axios.post("http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students",data).then((res)=>{
        dispatch({type:STUDENT_REQUEST_SUCCESS,payload:res.data.token})      
    }).catch(()=>{
        dispatch({type:STUDENT_REQUEST_FAILURE}) 
    })
}

export const getStudent = (paramObj) => {
    dispatch({type:STUDENT_REQUEST_PENDING})
    axios.get("http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students",paramObj).then((res)=>{
        dispatch({type:GET_STUDENT_REQUEST_SUCCESS,payload:res.data})    
    }).catch(()=>{
        dispatch({type:STUDENT_REQUEST_FAILURE}) 
    })
}