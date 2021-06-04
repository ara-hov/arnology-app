import { actionTypes, HomeTypes } from './actionTypes';

const initState = {
  navlinks: [] as Array<any>,
  error: null as null | string,
};
type InitStateType = typeof initState;

const homeReduser = (state = initState, action: HomeTypes): InitStateType => {
  switch (action.type) {
    case actionTypes.FAILURE: {
      return {
        ...state,
        error: 'Somthing wrong',
      };
    }

    case actionTypes.GET_NAVLINKS: {
      return {
        ...state,
        error: null,
        navlinks: action.payload,
      };
    }

    default:
      return state;
  }
};

export default homeReduser;
