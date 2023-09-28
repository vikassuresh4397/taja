import axios from 'axios';

const API_BASE_URL = 'https://busy-underwear-duck.cyclic.cloud';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';


export const signupSuccess = (message) => ({
  type: SIGNUP_SUCCESS,
  payload: message,
});

export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});


export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});


export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const handleSignup= (userData,setUserData) => {
  return async (dispatch) => {
    const response = await dispatch(signupAction(userData));

    if (response === 'Email already exists') {
      alert('Email already exists. Please use a different email.');
    } else {
      // Clear input values
      setUserData({
        username: '',
        avatar: '',
        email: '',
        password: '',
      });
      // Show success message
      alert('Signup successful!');
    }
  }
}

// const handleSignup = async () => {
//   const response = await dispatch(signupAction(userData));

//   if (response === 'Email already exists') {
//     alert('Email already exists. Please use a different email.');
//   } else {
//     // Clear input values
//     setUserData({
//       username: '',
//       avatar: '',
//       email: '',
//       password: '',
//     });
//     // Show success message
//     alert('Signup successful!');
//   }
// };










export const signupAction = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users/register`, userData);

      if (response.data.msg) {
        dispatch(signupSuccess(response.data.msg));
      } else if (response.data.error) {
        dispatch(signupFailure(response.data.error));
      }
    } catch (error) {
      console.error('Error during signup:', error);
      dispatch(signupFailure('An error occurred during signup'));
    }
  };
};

export const signinAction = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users/login`, userData);

      if (response.data.token) {
        dispatch(loginSuccess(response.data.token));
      } else if (response.data.error) {
        dispatch(loginFailure(response.data.error));
      }
    } catch (error) {
      console.error('Error during login:', error);
      dispatch(loginFailure('An error occurred during login'));
    }
  };
};





if (window.Cypress) {

  window.signupAction = signupAction;
  window.signinAction = signinAction;
}
