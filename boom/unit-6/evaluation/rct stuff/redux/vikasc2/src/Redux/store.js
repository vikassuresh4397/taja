import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as productReducer } from "./ProductReducer/reducer";
import { reducer as cartReducer } from "./CartReducer/reducer";


import { applyMiddleware, combineReducers, legacy_createStore } from "redux";


const rootReducer = combineReducers({
  authReducer,
  productReducer,
  cartReducer
});


const myMiddleWare=(store)=>(dispatch)=>(action)=>{
   if(typeof action==="function"){
    return action(dispatch)
   }
   return dispatch(action)
}


export const store = legacy_createStore(rootReducer,applyMiddleware(myMiddleWare));


// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}


