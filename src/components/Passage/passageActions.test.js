import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  updatePassage,
  clearPassage,
  updateVocabularyList,
  resetVocabularyList,
  appendVocabulary,
  deleteVocabulary
} from './passageActions';
import passageActionTypes from './passageActionTypes';

describe('passageActions', () => {
  const middlewares = [thunk];
  const state = {
    passage: {
      passage: '',
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

  describe('updateVocabularyList', () => {
    it(`creates ${passageActionTypes.UPDATE_VOCABULARY_LIST} action`, () => {
      const store = mockStore(state);
      const expectedActions = [
        {
          type: passageActionTypes.UPDATE_VOCABULARY_LIST,
          list: ['1', '2', '3']
        }
      ];

      store.dispatch(updateVocabularyList(['1', '2', '3']));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('resetVocabularyList', () => {
    it(`creates ${passageActionTypes.RESET_VOCABULARY_LIST} action`, () => {
      const store = mockStore(state);
      const expectedActions = [
        {
          type: passageActionTypes.RESET_VOCABULARY_LIST
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
          type: passageActionTypes.UPDATE_VOCABULARY_LIST,
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
          type: passageActionTypes.UPDATE_VOCABULARY_LIST,
          list: ['1', '2']
        }
      ];

      store.dispatch(deleteVocabulary(vocabularyList, '3'));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
