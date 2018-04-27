import { combineReducers } from 'redux';
import passageReducer from './components/Passage/passageReducer';
import vocabularyReducer from './components/Vocabulary/vocabularyReducer';

const zincVocabularyApp = combineReducers({
  passage: passageReducer,
  vocabulary: vocabularyReducer
});

export default zincVocabularyApp;
