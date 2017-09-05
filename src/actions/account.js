import Alert from 'react-s-alert';
import { browserHistory } from 'react-router';
import { SET_USER_UID } from '../constants/actionTypes';
import { setStatusRequestFalse, setStatusRequestTrue } from './spinner';
import alertConfig from '../constants/alertConfig';

function setUserUid(uid) {
  return {
    type: SET_USER_UID,
    payload: uid,
  };
}

function createAccount(credentials) {
  return function $createAccount(dispatch, getState, getFirebase) {
    const firebase = getFirebase();
    dispatch(setStatusRequestTrue());
    return firebase
      .createUser(credentials)
      .then((response) => {
        dispatch(getUserInfo());
        browserHistory.push('/groups');
        dispatch(setStatusRequestFalse());
        Alert.success('You have successfully created an account', alertConfig);
        return response;
      })
      .catch((error) => {
        dispatch(setStatusRequestFalse());
        return error;
      });
  };
}

function login(credentials) {
  return function $createAccount(dispatch, getState, getFirebase) {
    const firebase = getFirebase();
    dispatch(setStatusRequestTrue());
    return firebase
      .login(credentials)
      .then((response) => {
        dispatch(getUserInfo());
        browserHistory.push('/groups');
        dispatch(setStatusRequestFalse());
        Alert.success('You have successfully logged in', alertConfig);
        return response;
      })
      .catch((error) => {
        dispatch(setStatusRequestFalse());
        return error;
      });
  };
}

function getUserInfo() {
  return function $getUserInfo(dispatch, getState, getFirebase) {
    const firebase = getFirebase();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUserUid(user.uid));
      } else {
        browserHistory.push('/');
      }
    });
  };
}

function logout() {
  return function $logout(dispatch, getState, getFirebase) {
    const firebase = getFirebase();
    firebase.logout();
    dispatch(setUserUid(''));
    browserHistory.push('/');
    Alert.success('You have successfully logged out', alertConfig);
  };
}

export { setUserUid, createAccount, login, getUserInfo, logout };
