import { connect } from 'react-redux';
import VocabularyComponent from './VocabularyComponent';
import {
  updateVocabularyList,
  resetVocabularyList,
  appendVocabulary,
  deleteVocabulary
} from './vocabularyActions';

const mapStateToProps = state => {
  return {
    vocabularyList: state.vocabulary.vocabularyList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateVocabularyList: list => {
      dispatch(updateVocabularyList(list));
    },

    resetVocabularyList() {
      dispatch(resetVocabularyList());
    },

    appendVocabulary: (list, vocabulary) => {
      dispatch(appendVocabulary(list, vocabulary));
    },

    deleteVocabulary: (list, vocabulary) => {
      dispatch(deleteVocabulary(list, vocabulary));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  VocabularyComponent
);
