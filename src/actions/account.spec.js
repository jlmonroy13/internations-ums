import { setUserUid } from './account';
import { SET_USER_UID } from '../constants/actionTypes';

describe('Actions::account', () => {

  it('should create an action to set the user uid', () => {
    const uid = 'Dj00zAPebkeLe22usENwXcuoFO43';
    const actual = setUserUid(uid);
    const expected = {
      type: SET_USER_UID,
      payload: 'Dj00zAPebkeLe22usENwXcuoFO43',
    };

    expect(actual).toEqual(expected);
  });
});
