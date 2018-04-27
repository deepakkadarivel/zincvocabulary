import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  updateVocabularyList,
  resetVocabularyList,
  appendVocabulary,
  deleteVocabulary
} from './vocabularyActions';
import vocabularyActionTypes from './vocabularyActionTypes';

describe('vocabularyActions', () => {
  const middlewares = [thunk];
  const state = {
    vocabulary: {
      vocabularyList: []
    }
  };

  const mockStore = configureStore(middlewares);

  describe('updateVocabularyList', () => {
    it(`creates ${vocabularyActionTypes.UPDATE_VOCABULARY_LIST} action`, () => {
      const store = mockStore(state);
      const expectedActions = [
        {
          type: vocabularyActionTypes.UPDATE_VOCABULARY_LIST,
          list: ['1', '2', '3']
        }
      ];

      store.dispatch(updateVocabularyList(['1', '2', '3']));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('resetVocabularyList', () => {
    it(`creates ${vocabularyActionTypes.RESET_VOCABULARY_LIST} action`, () => {
      const store = mockStore(state);
      const expectedActions = [
        {
          type: vocabularyActionTypes.RESET_VOCABULARY_LIST
        }
      ];

      store.dispatch(resetVocabularyList());

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('appendVocabulary', () => {
    it(`creates appendVocabulary action`, () => {
      const store = mockStore(state);
      const vocabularyList = ['1', '2'];
      const expectedActions = [
        {
          type: vocabularyActionTypes.UPDATE_VOCABULARY_LIST,
          list: ['1', '2', '3']
        }
      ];

      store.dispatch(appendVocabulary(vocabularyList, '3'));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('deleteVocabulary', () => {
    it(`creates deleteVocabulary action`, () => {
      const store = mockStore(state);
      const vocabularyList = ['1', '2', '3'];
      const expectedActions = [
        {
          type: vocabularyActionTypes.UPDATE_VOCABULARY_LIST,
          list: ['1', '2']
        }
      ];

      store.dispatch(deleteVocabulary(vocabularyList, '3'));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
