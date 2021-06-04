import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer, { RootReducerType } from './rootReducer';

const middlewares = [thunk, logger];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export type StateType = ReturnType<RootReducerType>;
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
