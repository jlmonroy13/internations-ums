import { SET_USER_UID } from '../constants/actionTypes';
import authorizationReducer from './authorization';
import initialState from '../store/initialState';

describe('Reducers::Authorization', () => {
  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    expect(authorizationReducer(undefined, action)).toEqual(initialState.authorization);
  });

  it(`should handle ${SET_USER_UID}`, () => {
    const action = { type: SET_USER_UID, payload: 'Dj00zAPebkeLe22usENwXcuoFO43' };
    const expected = {
      uid: 'Dj00zAPebkeLe22usENwXcuoFO43',
      isLoading: false,
    };

    expect(authorizationReducer(initialState.authorization, action)).toEqual(expected);
  });
});
