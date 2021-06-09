import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActionCreators from '../redux/home/actions';
// const AllActionCreators={
// ...ShowsActionCreators,
// ...OtherActionCreator
// }
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(homeActionCreators, dispatch);
};
