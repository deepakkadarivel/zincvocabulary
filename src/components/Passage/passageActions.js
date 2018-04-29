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
    const list = getState().vocabulary.vocabularyList;

    const wordsArray = splitByWords(passage);
    const uniqueWordMap = createWordMap(wordsArray);
    const sortedWordMap = sortByCount(uniqueWordMap);

    let newList = [];
    sortedWordMap.map(word => {
      if (word !== '') {
        newList.push(word.name);
      }
    });
    return dispatch(updateVocabularyList(newList));
  };
};

export { updatePassage, clearPassage, updateVocabularySet };
