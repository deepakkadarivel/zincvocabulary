import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { updatePassage, clearPassage } from './passageActions';
import passageActionTypes from './passageActionTypes';

describe('passageActions', () => {
  const middlewares = [thunk];
  const state = {
    passage: {
      passage: ''
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
});
