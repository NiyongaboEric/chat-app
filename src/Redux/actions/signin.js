import * as types from '../actionTypes/signinAction';
import axios from 'axios';


export const signin = (data) => {
  return {
    type: types.USER_SIGNIN,
    payload: { data: 'successful logged in' }
  }
};

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
          dispatch(signin(res));
          // pass 
          // set token
        }
      })
      .catch(err => {
        // error message
        // dispatch(signin(err));
      })
  }
};
