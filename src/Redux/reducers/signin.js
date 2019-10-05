import { signinInitialStates } from '../store/initialStates';
import * as types from '../actionTypes/signinAction';


const signinReducer = (state = signinInitialStates, { type, payload }) => {
  switch (type) {
    case types.USER_IS_SIGNIN:
      return payload;

    default:
      return state;
  }
};

export default signinReducer;
