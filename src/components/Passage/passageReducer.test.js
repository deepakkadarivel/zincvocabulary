import seamlessImmutable from 'seamless-immutable';

import passageActionTypes from './passageActionTypes';
import passageReducer from './passageReducer';

describe('passageReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = seamlessImmutable({
      passage: ''
    });
  });

  it('returns the initial state', () => {
    expect(passageReducer(undefined, {})).toEqual(initialState);
  });

  it(`handles ${passageActionTypes.UPDATE_PASSAGE}`, () => {
    const expectedState = {
      passage: 'word1'
    };

    const action = {
      type: passageActionTypes.UPDATE_PASSAGE,
      passage: 'word1'
    };

    expect(passageReducer(initialState, action)).toEqual(expectedState);
  });

  it(`handles ${passageActionTypes.CLEAR_PASSAGE}`, () => {
    expect(
      passageReducer(initialState, {
        type: passageActionTypes.CLEAR_PASSAGE
      })
    ).toEqual(initialState);
  });
});
