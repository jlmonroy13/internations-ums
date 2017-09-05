import { SET_EDIT_MODE, SET_NAV_STATE, SET_MENU_STATE } from '../constants/actionTypes';
import initialState from '../store/initialState';

export default function events(state = initialState.events, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_EDIT_MODE:
      return {
        ...state,
        editMode: payload,
      };
    case SET_MENU_STATE:
      return {
        ...state,
        isMenuOpen: payload,
      };
    case SET_NAV_STATE:
      return {
        ...state,
        isNavOpen: payload,
      };
    default:
      return state;
  }
}
