import React, { Component } from 'react';
import './Vocabulary.css';
import Button from '../shared/Button/Button';
import PropTypes from 'prop-types';

class VocabularyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vocabularyList: []
    };
    // this.handleVocabularyChange = this.handleVocabularyChange.bind(this);
    // this.clear = this.clear.bind(this);
  }

  render() {
    return (
      <div className="VocabularyComponent">
        <p className="vocabulary_title">
          Add up to 15 words to complete your set.
        </p>
        <div className="vocabulary_footer">
          <Button className="Button_primary">create</Button>
        </div>
      </div>
    );
  }
}

VocabularyComponent.propTypes = {
  vocabularyList: PropTypes.array,
  updateVocabularyList: PropTypes.func,
  resetVocabularyList: PropTypes.func,
  appendVocabulary: PropTypes.func,
  deleteVocabulary: PropTypes.func
};

export default VocabularyComponent;
