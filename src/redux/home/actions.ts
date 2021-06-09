import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { actionTypes, HomeTypes } from './actionTypes';
import { API_URL } from '../../api/constants';
import { StateType } from '../store';

type ThunkType<T extends Action> = ThunkAction<
  Promise<void> | void,
  StateType,
  unknown,
  T
>;

export const getNavlinks = (lang: string): ThunkType<HomeTypes> => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${API_URL}/sections`, {
        headers: {
          'Content-Language': lang,
        },
      });
      dispatch({
        type: actionTypes.GET_NAVLINKS,
        payload: response.data.Sections,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FAILURE,
        payload: error.response?.data.error,
      });
    }
  };
};
