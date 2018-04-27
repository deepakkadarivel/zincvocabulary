import seamlessImmutable from 'seamless-immutable';

import vocabularyActionTypes from './vocabularyActionTypes';
import vocabularyReducer from './vocabularyReducer';

describe('vocabularyReducer', () => {
  let initialState;

  beforeEach(() => {
    initialState = seamlessImmutable({
      vocabularyList: []
    });
  });

  it('returns the initial state', () => {
    expect(vocabularyReducer(undefined, {})).toEqual(initialState);
  });

  it(`handles ${vocabularyActionTypes.UPDATE_VOCABULARY_LIST}`, () => {
    const expectedState = {
      vocabularyList: ['word1', 'word2']
    };

    const action = {
      type: vocabularyActionTypes.UPDATE_VOCABULARY_LIST,
      list: ['word1', 'word2']
    };

    expect(vocabularyReducer(initialState, action)).toEqual(expectedState);
  });

  it(`handles ${vocabularyActionTypes.RESET_VOCABULARY_LIST}`, () => {
    expect(
      vocabularyReducer(initialState, {
        type: vocabularyActionTypes.RESET_VOCABULARY_LIST
      })
    ).toEqual(initialState);
  });
});
