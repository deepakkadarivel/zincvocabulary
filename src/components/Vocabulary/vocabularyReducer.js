import vocabularyInitialState from './vocabularyInitialState';
import vocabularyActionTypes from './vocabularyActionTypes';

const vocabularyReducer = (state = vocabularyInitialState, action) => {
  switch (action.type) {
    case vocabularyActionTypes.UPDATE_VOCABULARY_LIST:
      return state.set('vocabularyList', action.list);

    case vocabularyActionTypes.RESET_VOCABULARY_LIST:
      return state.set('vocabularyList', vocabularyInitialState.vocabularyList);

    default:
      return state;
  }
};

export default vocabularyReducer;
