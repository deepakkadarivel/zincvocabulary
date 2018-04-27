import { connect } from 'react-redux';
import PassageComponent from './PassageComponent';
import { updatePassage } from './passageActions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updatePassage: passage => {
      dispatch(updatePassage(passage));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PassageComponent);
