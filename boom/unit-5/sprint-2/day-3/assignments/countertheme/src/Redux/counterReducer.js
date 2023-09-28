//Complete the reducer function logic inside the curly braces {}

import * as types from "./actionTypes";

// the counter initstate shouldbe 10
const initstate = {
	counter: 10,
};
const counterReducer = (state = initstate, action) => {
	switch (action.type) {

		case types.ADD:

			return { ...state, counter: state.counter + action.payload };
		
			case types.REDUCE:
			
			return { ...state, counter: state.counter - action.payload };
		default:
			return state;
	}
};

export { counterReducer };
