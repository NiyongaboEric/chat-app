import * as types from '../actionTypes/signinAction';
import axios from 'axios';


export const signin = (message) => {
  return {
    type: types.USER_SIGNIN,
    payload: message
  }
};

export const signinError = (message) => {
  return {
    type: types.USER_SIGNIN_ERROR,
    payload: message,
  }
}

export const signinApi = ({ email, password }) => {
  return async (dispatch) => {
    const url = 'https://chat-app-edition-api.herokuapp.com/api/signin';
    try {
      const result = await axios.post(
        url, {
          email, 
          password
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      if (result.status === 200) {
        const { data, message, status } = result.data;
        const { token } = data;
        localStorage.setItem('token', token);
        dispatch(signin({ message, status }));
      }
    } catch(err) {
      if (err.response) {
        const { message } = err.response.data;
        return dispatch(signinError({ message }));
      }
      if (err.request) {
        return dispatch(signinError({ message: 'Network Error' }));
      }
      return dispatch(signinError({ message: 'Server Error' }));
    }
  }
};
