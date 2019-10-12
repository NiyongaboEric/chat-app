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
  return (dispatch) => {
    const url = 'https://chat-app-edition-api.herokuapp.com/api/signin';
    axios
      .post(
        url, {
          email,
          password
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        if (res.status === 200) {
          const { token } = res.data.data;
          const { message, status } = res.data;
          localStorage.setItem('token', token);
          dispatch(signin({ message, status }));
        }
      })
      .catch(err => {
        if (err.response) {
          const { message } = err.response.data;
          return dispatch(signinError({ message }));
        }
        if (err.request) {
          return dispatch(signinError({ message: 'Network Error' }));
        }
        return dispatch(signinError({ message: 'Server Error' }));
      })
  }
};
