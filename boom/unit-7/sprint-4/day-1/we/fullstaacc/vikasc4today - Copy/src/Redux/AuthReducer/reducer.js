import { SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE } from './action';

const initialState = {
  user: null, 
  token: null, 
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: null,
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        error: null,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        token: null,
        error: action.payload,
      };

    default:
      return state;
  }
};


