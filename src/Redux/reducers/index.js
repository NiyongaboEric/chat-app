import { combineReducers } from 'redux';

import signinReducer from './signin';

import { initialStates } from '../store/initialStates';

const allReducers = combineReducers({
  initialStates,
  signin: signinReducer,
});

export default allReducers;
