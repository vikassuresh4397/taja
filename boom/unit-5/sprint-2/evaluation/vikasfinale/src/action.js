import { ADD_TO_WATCHLIST } from "./actionTypes"
import axios from "axios"

const getWatchListAction = (payload) => {
    return {type: ADD_TO_WATCHLIST, payload}
}


export const getWatchListData = (id) => (dispatch) => {
    
    axios.get(`http://localhost:8080/matches/${id}`).then((res)=>{
        console.log(res.data)
        dispatch(getWatchListAction(res.data))
    }).catch((er)=>{
        console.log(er)
    })
}

