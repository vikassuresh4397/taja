// import { reducer as authReducer } from "./AuthReducer/reducer";
// import { reducer as productReducer } from "./ProductReducer/reducer";
// import { reducer as cartReducer } from "./CartReducer/reducer";

import { combineReducers, legacy_createStore } from "redux";

const rootReducer = combineReducers({});

export const store = legacy_createStore(rootReducer);

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
