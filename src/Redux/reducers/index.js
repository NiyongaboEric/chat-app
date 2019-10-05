import { combineReducers } from 'redux';

import signinReducer from './signin';

const allReducers = combineReducers({
  signin: signinReducer,
});

export default allReducers;
