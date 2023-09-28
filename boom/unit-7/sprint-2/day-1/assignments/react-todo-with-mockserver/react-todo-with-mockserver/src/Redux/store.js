import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import todoReducer from "./todoReducer/reducer";
import themeReducer from "./themeReducer/reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
