import { browserHistory } from 'react-router';
import Alert from 'react-s-alert';
import { uploadFile } from './files';
import { addUserToGroup } from './group';
import { setStatusRequestFalse, setStatusRequestTrue } from './spinner';
import { setEditMode } from './events';
import StrUtils from '../utils/string';
import alertConfig from '../constants/alertConfig';

function createUser(data, file, groupId) {
  return function $createUser(dispatch, getState, getFirebase) {
    const firebase = getFirebase();
    const state = getState();
    const { uid } = state.authorization;
    dispatch(uploadFile(file))
      .then(response => response.a.downloadURLs[0])
      .then(urlPhoto => firebase.ref('contacts').push({ urlPhoto, ...data }))
      .then((response) => {
        const contactId = response.path.o[1];
        const updates = {
          [`users/${uid}/contacts/${contactId}`]: contactId,
          [`contacts/${contactId}/id`]: contactId,
        };
        dispatch(addGroupToUser(contactId, groupId));
        dispatch(addUserToGroup(groupId, contactId));
        return firebase.ref().update(updates);
      })
      .then((response) => {
        Alert.success('You have successfully created a new user', alertConfig);
        dispatch(setStatusRequestFalse());
        return response;
      });
  };
}

function updateUser(data, file) {
  return function $updateUser(dispatch, getState, getFirebase) {
    const firebase = getFirebase();
    const state = getState();
    const { pathname } = state.routing.locationBeforeTransitions;
    const contactId = StrUtils.getStringBetween(pathname.slice(1), '/', '');

    dispatch(uploadFile(file))
      .then(response => response.a.downloadURLs[0])
      .then((urlPhoto) => {
        const updates = {
          [`contacts/${contactId}/email`]: data.email,
          [`contacts/${contactId}/facebook`]: data.facebook,
          [`contacts/${contactId}/firstName`]: data.firstName,
          [`contacts/${contactId}/lastName`]: data.lastName,
          [`contacts/${contactId}/twitter`]: data.twitter,
          [`contacts/${contactId}/urlPhoto`]: urlPhoto,
        };
        return firebase.ref().update(updates);
      })
      .then((response) => {
        Alert.success(
          `You have successfully updated the information of the user ${data.firstName} ${data.lastName}`,
          alertConfig,
        );
        dispatch(setEditMode(false));
        dispatch(setStatusRequestFalse());
        return response;
      });
  };
}

function addGroupToUser(contactId, groupId) {
  const update = {
    [`contacts/${contactId}/group/${groupId}`]: groupId,
    [`groups/${groupId}/user/${contactId}`]: contactId,
  };
  return function $addGroupToUser(dispatch, getState, getFirebase) {
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

function deleteGroupFromUser(contactId, groupId) {
  const update = {
    [`contacts/${contactId}/group/${groupId}`]: null,
    [`groups/${groupId}/user/${contactId}`]: null,
  };
  return function $addGroupToUser(dispatch, getState, getFirebase) {
    if (confirm('Are you sure you want to remove a group from this user?')) { // eslint-disable-line
      dispatch(setStatusRequestTrue());
      return getFirebase()
        .ref()
        .update(update)
        .then((response) => {
          Alert.success('You have successfully added a group to this user', alertConfig);
          dispatch(setStatusRequestFalse());
          return response;
        });
    }
    return false;
  };
}

function deleteUser(uId, userId, groupsIds) {
  const groupsIdsObj = groupsIds.reduce((acc, item) => {
    acc[`groups/${item}/user/${userId}`] = null;
    return acc;
  }, {});
  const update = {
    [`contacts/${userId}`]: null,
    [`users/${uId}/contacts/${userId}`]: null,
  };
  const data = { ...groupsIdsObj, ...update };
  return function $deleteUser(dispatch, getState, getFirebase) {
    if (confirm('Are you sure you want to delete this user?')) { // eslint-disable-line
      browserHistory.push('/groups');
      dispatch(setStatusRequestTrue());
      getFirebase()
        .ref()
        .update(data)
        .then((response) => {
          Alert.success('You have successfully deleted a user', alertConfig);
          dispatch(setStatusRequestFalse());
          return response;
        });
    }
  };
}

export { createUser, updateUser, addGroupToUser, deleteGroupFromUser, deleteUser };
