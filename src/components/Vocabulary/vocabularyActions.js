import vocabularyActionTypes from './vocabularyActionTypes';

const updateVocabularyList = list => {
  return {
    type: vocabularyActionTypes.UPDATE_VOCABULARY_LIST,
    list
  };
};

const resetVocabularyList = () => {
  return {
    type: vocabularyActionTypes.RESET_VOCABULARY_LIST
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
  updateVocabularyList,
  resetVocabularyList,
  appendVocabulary,
  deleteVocabulary
};
