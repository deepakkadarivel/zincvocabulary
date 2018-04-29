import { connect } from 'react-redux';
import PassageComponent from './PassageComponent';
import {
  clearPassage,
  updatePassage,
  updateVocabularySet
} from './passageActions';
import { resetVocabularyList } from '../Vocabulary/vocabularyActions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updatePassage: passage => {
      dispatch(updatePassage(passage));
      dispatch(updateVocabularySet());
    },

    clearPassage() {
      dispatch(clearPassage());
      dispatch(resetVocabularyList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PassageComponent);
