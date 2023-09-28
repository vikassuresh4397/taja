import { ADD_TO_WATCHLIST } from "./actionTypes";

const initialstate = {
  watchList: [],
}


export const reducer = (state=initialstate, {type,payload}) => {
  // Complete the logic
  switch(type){
    case ADD_TO_WATCHLIST:return {
      ...state, 
      watchList: [...state.watchList, payload]}
    default:
      return state
  }
};
