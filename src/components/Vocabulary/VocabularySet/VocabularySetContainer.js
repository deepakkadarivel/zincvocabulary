import { connect } from 'react-redux';
import VocabularySet from './VocabularySet';
import { deleteVocabulary } from '../vocabularyActions';

const mapStateToProps = state => {
  return {
    vocabularyList: state.vocabulary.vocabularyList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteVocabulary: (list, vocabulary) => {
      dispatch(deleteVocabulary(list, vocabulary));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VocabularySet);
