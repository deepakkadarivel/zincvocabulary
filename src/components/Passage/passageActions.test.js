import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  updatePassage,
  clearPassage,
  updateVocabularySet
} from './passageActions';
import passageActionTypes from './passageActionTypes';
import vocabularyActionTypes from '../Vocabulary/vocabularyActionTypes';

describe('passageActions', () => {
  const middlewares = [thunk];
  const state = {
    passage: {
      passage: ''
    },
    vocabulary: {
      vocabularyList: []
    }
  };

  const mockStore = configureStore(middlewares);

  describe('updatePassage', () => {
    it(`creates ${passageActionTypes.UPDATE_PASSAGE} action`, () => {
      const store = mockStore(state);
      const expectedActions = [
        {
          type: passageActionTypes.UPDATE_PASSAGE,
          passage: 'Sample Passage'
        }
      ];

      store.dispatch(updatePassage('Sample Passage'));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('clearPassage', () => {
    it(`creates ${passageActionTypes.CLEAR_PASSAGE} action`, () => {
      const store = mockStore(state);
      const expectedActions = [
        {
          type: passageActionTypes.CLEAR_PASSAGE
        }
      ];

      store.dispatch(clearPassage());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('updateVocabularySet', () => {
    it(`dispatchs updateVocabularyList action`, () => {
      const expectedActions = [
        {
          type: vocabularyActionTypes.UPDATE_VOCABULARY_LIST,
          list: []
        }
      ];
      const store = mockStore(state);

      store.dispatch(updateVocabularySet());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
