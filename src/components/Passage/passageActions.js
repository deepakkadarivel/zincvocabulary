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

export { updatePassage, clearPassage };
