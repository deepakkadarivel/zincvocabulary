import passageInitialState from './passageInitialState';
import passageActionTypes from './passageActionTypes';

const passageReducer = (state = passageInitialState, action) => {
  switch (action.type) {
    case passageActionTypes.UPDATE_PASSAGE:
      return state.set('passage', action.passage);

    case passageActionTypes.CLEAR_PASSAGE:
      return state.set('passage', passageInitialState.passage);

    case passageActionTypes.UPDATE_VOCABULARY_LIST:
      return state.setIn(['vocabularyList', action.list], []);

    case passageActionTypes.RESET_VOCABULARY_LIST:
      return state.setIn(
        ['vocabularyList', passageInitialState.vocabularyList],
        []
      );

    default:
      return state;
  }
};

export default passageReducer;
