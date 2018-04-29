import { connect } from 'react-redux';
import PassageComponent from './PassageComponent';
import {
  clearPassage,
  updatePassage,
  updateVocabularySet
} from './passageActions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updatePassage: passage => {
      dispatch(updatePassage(passage));
      dispatch(updateVocabularySet());
    },

    clearPassage: passage => {
      dispatch(clearPassage());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PassageComponent);
