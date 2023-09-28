import { counterReducer } from "./counterReducer";
import { themeReducer } from "./themeReducer";

import { legacy_createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
	
	theme: themeReducer,
	counter: counterReducer,
});

export const store = legacy_createStore(rootReducer);
