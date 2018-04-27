import { combineReducers } from 'redux';
import passageReducer from './components/Passage/passageReducer';

const zincVocabularyApp = combineReducers({
  passage: passageReducer
});

export default zincVocabularyApp;
