import { combineReducers } from 'redux';
import homeReduser from './home/reducer';
export interface CombinedState {}
const rootReducer = combineReducers({ homeReduser });

export type RootReducerType = typeof rootReducer;
export default rootReducer;
