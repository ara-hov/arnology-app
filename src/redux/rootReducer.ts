import { combineReducers } from 'redux';
export interface CombinedState {}
const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
