import { setStatusRequestTrue } from './spinner';

export function uploadFile(file) {
  return function $uploadFile(dispatch, getState, getFirebase) {
    const firebase = getFirebase();
    const random = Date.now();
    const name = `${random}${file.name}`;
    dispatch(setStatusRequestTrue());
    return firebase
      .storage()
      .ref(name)
      .put(file);
  };
}
