

import { CHANGE_THEME } from "./actionTypes";

const initstate = {
	theme: "light",
};
const themeReducer = (state = initstate, action) => {
	switch (action.type) {
		case CHANGE_THEME:
			return { ...state, theme: action.payload };
		default:
			return state;
	}
};

export { themeReducer };
