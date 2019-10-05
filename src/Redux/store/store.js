import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { initialStates } from '../store/initialStates';
import allReducers from '../reducers/index';

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  initialStates,
  allReducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
