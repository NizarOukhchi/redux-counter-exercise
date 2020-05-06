import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import counterReducer from './reducers/counter';
import inputReducer from './reducers/input';

const logger = createLogger();

const store = createStore(
  combineReducers({ counter: counterReducer, input: inputReducer }),
  applyMiddleware(logger)
);

export default store;
