import passageActionTypes from './passageActionTypes';

const updatePassage = passage => {
  return {
    type: passageActionTypes.UPDATE_PASSAGE,
    passage
  };
};

const clearPassage = () => {
  return {
    type: passageActionTypes.CLEAR_PASSAGE
  };
};

const updateVocabularyList = list => {
  return {
    type: passageActionTypes.UPDATE_VOCABULARY_LIST,
    list
  };
};

const resetVocabularyList = () => {
  return {
    type: passageActionTypes.RESET_VOCABULARY_LIST
  };
};

const appendVocabulary = (list, vocabulary) => {
  return (dispatch, getState) => {
    let updatedList = [...list, vocabulary];
    dispatch(updateVocabularyList(updatedList));
  };
};

const deleteVocabulary = (list, vocabulary) => {
  return (dispatch, getState) => {
    let updatedList = list.filter(word => word !== vocabulary);
    dispatch(updateVocabularyList(updatedList));
  };
};

export {
  updatePassage,
  clearPassage,
  updateVocabularyList,
  resetVocabularyList,
  appendVocabulary,
  deleteVocabulary
};
