import {
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import homeReducer from './features/home/homeSlice';

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    navLinks:homeReducer
  },
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

