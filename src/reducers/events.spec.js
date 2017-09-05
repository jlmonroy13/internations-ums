import { SET_EDIT_MODE } from '../constants/actionTypes';
import eventsReducer from './events';
import initialState from '../store/initialState';

describe('Reducers::Events', () => {
  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    expect(eventsReducer(undefined, action)).toEqual(initialState.events);
  });

  it(`should handle ${SET_EDIT_MODE}`, () => {
    const action = { type: SET_EDIT_MODE, payload: true };
    const expected = {
      ...initialState.events,
      editMode: true,
    };

    expect(eventsReducer(initialState.events, action)).toEqual(expected);
  });
});
