import { SET_EDIT_MODE, SET_MENU_STATE, SET_NAV_STATE } from '../constants/actionTypes';

function setEditMode(isActive) {
  return {
    type: SET_EDIT_MODE,
    payload: isActive,
  };
}

function setMenuState(state) {
  return {
    type: SET_MENU_STATE,
    payload: state,
  };
}

function setNavState(state) {
  return {
    type: SET_NAV_STATE,
    payload: state,
  };
}

export { setEditMode, setMenuState, setNavState };
