import { pendingTask, begin, end } from 'react-redux-spinner';
import { SET_STATUS_REQUEST } from '../constants/actionTypes';

function setStatusRequestFalse() {
  return {
    type: SET_STATUS_REQUEST,
    payload: false,
    [pendingTask]: end,
  };
}

function setStatusRequestTrue() {
  return {
    type: SET_STATUS_REQUEST,
    payload: true,
    [pendingTask]: begin,
  };
}

export { setStatusRequestFalse, setStatusRequestTrue };
