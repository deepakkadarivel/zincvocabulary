import passageActionTypes from './passageActionTypes';
import { updateVocabularyList } from '../Vocabulary/vocabularyActions';
import {
  createWordMap,
  sortByCount,
  splitByWords
} from '../../helpers/StringParser';

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

const updateVocabularySet = () => {
  return (dispatch, getState) => {
    const passage = getState().passage.passage;

    const wordsArray = splitByWords(passage);
    const uniqueWordMap = createWordMap(wordsArray);
    const sortedWordMap = sortByCount(uniqueWordMap);

    if (passage !== '') {
      let newList = [];
      sortedWordMap.forEach(word => {
        if (word.name.trim() !== '') {
          newList.push(word.name);
        }
      });
      newList = newList.slice(0, 10);
      return dispatch(updateVocabularyList(newList));
    }
    return dispatch(updateVocabularyList([]));
  };
};

export { updatePassage, clearPassage, updateVocabularySet };
