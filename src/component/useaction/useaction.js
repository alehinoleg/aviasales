import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as ticketsActions from '../store/tickets/ticketsActions'

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ticketsActions, dispatch);
};

export default useActions;