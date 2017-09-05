import { setEditMode } from './events';
import { SET_EDIT_MODE } from '../constants/actionTypes';

describe('Actions::events', () => {
  it('should create an action to set edit mode', () => {
    const isActive = true;
    const actual = setEditMode(isActive);
    const expected = {
      type: SET_EDIT_MODE,
      payload: true,
    };

    expect(actual).toEqual(expected);
  });
});
