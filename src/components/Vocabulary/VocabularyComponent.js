import React, { Component } from 'react';
import './Vocabulary.css';
import Button from '../shared/Button/Button';
import PropTypes from 'prop-types';
import SingleInput from '../shared/SingleInput/SingleInput';

class VocabularyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      vocabularySet: props.vocabularyList,
      message: '',
      messageClass: ''
    };
    this.handleWordChange = this.handleWordChange.bind(this);
    this.renderVocabularySet = this.renderVocabularySet.bind(this);
    this.checkAndCreateNewWordInVocabulary = this.checkAndCreateNewWordInVocabulary.bind(
      this
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.vocabularyList !== this.props.vocabularyList) {
      this.setState({
        vocabularySet: nextProps.vocabularyList
      });
    }
  }

  renderVocabularySet() {
    return this.state.vocabularySet.map(vocabulary => {
      return <li key={vocabulary}>{vocabulary}</li>;
    });
  }

  checkAndCreateNewWordInVocabulary() {
    if (!this.state.vocabularySet.includes(this.state.word)) {
      this.setState({
        word: '',
        message: `Word ${this.state.word} added to your vocabulary.`,
        messageClass: 'message-success'
      });
      this.props.appendVocabulary(this.state.vocabularySet, this.state.word);
    } else {
      this.setState({
        message: `Word ${this.state.word} is already in your vocabulary.`,
        messageClass: 'message-error'
      });
    }
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
        <div className="vocabulary_list">{this.renderVocabularySet()}</div>
        <div className="vocabulary_footer">
          <SingleInput
            className="Input_vocabulary"
            inputType={'text'}
            name={'vocabulary'}
            controlFunc={this.handleWordChange}
            content={this.state.word}
            placeholder={'Type a word to add to the set...'}
            message={this.state.message}
            messageClass={this.state.messageClass}
          />
          <Button
            className="Button_primary"
            onClick={() => this.checkAndCreateNewWordInVocabulary()}
          >
            create
          </Button>
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
