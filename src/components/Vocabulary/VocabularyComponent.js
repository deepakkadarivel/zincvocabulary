import React, { Component } from 'react';
import './Vocabulary.css';
import Button from '../shared/Button/Button';
import PropTypes from 'prop-types';
import SingleInput from '../shared/SingleInput/SingleInput';

class VocabularyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ''
    };
    this.handleWordChange = this.handleWordChange.bind(this);
  }

  handleWordChange(e) {
    this.setState({ word: e.target.value });
  }

  render() {
    return (
      <div className="VocabularyComponent">
        <p className="vocabulary_title">
          Add up to 15 words to complete your set.
        </p>
        <div className="vocabulary_list" />
        <div className="vocabulary_footer">
          <SingleInput
            className="Input_vocabulary"
            inputType={'text'}
            name={'vocabulary'}
            controlFunc={this.handleWordChange}
            content={this.state.word}
            placeholder={'Type a word to add to the set...'}
          />
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
