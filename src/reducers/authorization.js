import { SET_USER_UID } from '../constants/actionTypes';
import initialState from '../store/initialState';

export default function authorization(state = initialState.authorization, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER_UID:
      return {
        ...state,
        uid: payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
