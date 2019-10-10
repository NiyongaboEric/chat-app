import { initialStates } from '../store/initialStates';
import * as types from '../actionTypes/signinAction';

const { signin } = initialStates;
const signinReducer = (state = signin, { type, payload }) => {
  switch (type) {
    case types.USER_SIGNIN:
      return payload;

    default:
      return state;
  }
};

export default signinReducer;
