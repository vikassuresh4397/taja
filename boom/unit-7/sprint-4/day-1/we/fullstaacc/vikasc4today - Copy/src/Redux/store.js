import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as bookReducer } from "./BookReducer/reducer";

const rootReducer = combineReducers({
  authReducer,
  bookReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
if (window.Cypress) {
  window.store = store;
}
