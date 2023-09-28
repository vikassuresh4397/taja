import axios from "axios";
// ADD_TO_WATCHLIST
import {ADD_TO_WATCHLIST} from "./actionTypes";
export const addtowhish=(paylaod)=>{
    return {type:ADD_TO_WATCHLIST,paylaod}

}
export const addtoWhishlist =(id)=>(dispatch)=>{
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/matches/${id}`).then((res)=>{
  dispatch(addtowhish(res.data));
}).catch((err)=>{
 console.log(err)
})
}

