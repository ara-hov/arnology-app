export enum actionTypes {
  GET_NAVLINKS = 'GET_NAVLINKS',
  FAILURE = 'FAILURE',
}

interface IGetNavlinks {
  type: actionTypes.GET_NAVLINKS;
  payload: Array<any>;
}
interface IFailure {
  type: actionTypes.FAILURE;
  payload: string;
}

export type HomeTypes = IGetNavlinks | IFailure;
