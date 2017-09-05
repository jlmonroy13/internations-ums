import { browserHistory } from 'react-router';
import Alert from 'react-s-alert';
import { uploadFile } from './files';
import { setStatusRequestFalse, setStatusRequestTrue } from './spinner';
import { setEditMode } from './events';
import StrUtils from '../utils/string';
import alertConfig from '../constants/alertConfig';

function createGroup(data, file) {
  return function $createGroup(dispatch, getState, getFirebase) {
    const firebase = getFirebase();
    const state = getState();
    const { uid } = state.authorization;
    dispatch(uploadFile(file))
      .then(response => response.a.downloadURLs[0])
      .then(urlPhoto => firebase.ref('groups').push({ urlPhoto, ...data }))
      .then((response) => {
        const groupId = response.path.o[1];
        const updates = {
          [`users/${uid}/groups/${groupId}`]: groupId,
          [`groups/${groupId}/id`]: groupId,
        };
        return firebase.ref().update(updates);
      })
      .then((response) => {
        Alert.success('You have successfully created a group', alertConfig);
        dispatch(setStatusRequestFalse());
        return response;
      });
  };
}

function updateGroup(data, file) {
  return function $updateGroup(dispatch, getState, getFirebase) {
    const firebase = getFirebase();
    const state = getState();
    const { pathname } = state.routing.locationBeforeTransitions;
    const groupId = StrUtils.getStringBetween(pathname.slice(1), '/', '');
    dispatch(uploadFile(file))
      .then(response => response.a.downloadURLs[0])
      .then((urlPhoto) => {
        const updates = {
          [`groups/${groupId}/urlPhoto`]: urlPhoto,
          [`groups/${groupId}/name`]: data.name,
          [`groups/${groupId}/description`]: data.description,
        };
        return firebase.ref().update(updates);
      })
      .then((response) => {
        Alert.success(
          `You have successfully updated the information of ${data.name} group`,
          alertConfig,
        );
        dispatch(setEditMode(false));
        dispatch(setStatusRequestFalse());
        return response;
      });
  };
}

function addUserToGroup(groupId, contactId) {
  const update = {
    [`groups/${groupId}/user/${contactId}`]: contactId,
    [`contacts/${contactId}/group/${groupId}`]: groupId,
  };
  return function $addUserToGroup(dispatch, getState, getFirebase) {
    dispatch(setStatusRequestTrue());
    return getFirebase()
      .ref()
      .update(update)
      .then((response) => {
        dispatch(setStatusRequestFalse());
        return response;
      });
  };
}

function deleteUserFromGroup(groupId, contactId) {
  const update = {
    [`groups/${groupId}/user/${contactId}`]: null,
    [`contacts/${contactId}/group/${groupId}`]: null,
  };
  return function $deleteUserFromGroup(dispatch, getState, getFirebase) {
    if (confirm('Are you sure you want to remove a user from this group?')) { // eslint-disable-line
      dispatch(setStatusRequestTrue());
      return getFirebase()
        .ref()
        .update(update)
        .then((response) => {
          Alert.success('You have successfully removed a user from this group', alertConfig);
          dispatch(setStatusRequestFalse());
          return response;
        });
    }
    return false;
  };
}

function deleteGroup(uid, groupId) {
  const update = {
    [`groups/${groupId}`]: null,
    [`users/${uid}/groups/${groupId}`]: null,
  };
  return function $deleteGroup(dispatch, getState, getFirebase) {
    if (confirm('Are you sure you want to delete this group?')) { // eslint-disable-line
      browserHistory.push('/groups');
      dispatch(setStatusRequestTrue());
      return getFirebase()
        .ref()
        .update(update)
        .then((response) => {
          Alert.success('You have successfully deleted a group', alertConfig);
          dispatch(setStatusRequestFalse());
          return response;
        });
    }
    return false;
  };
}

export { createGroup, updateGroup, addUserToGroup, deleteUserFromGroup, deleteGroup };
