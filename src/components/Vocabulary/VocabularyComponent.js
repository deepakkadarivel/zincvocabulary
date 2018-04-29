import React, { Component } from 'react';
import './Vocabulary.css';
import Button from '../shared/Button/Button';
import PropTypes from 'prop-types';
import SingleInput from '../shared/SingleInput/SingleInput';
import VocabularySetContainer from './VocabularySet/VocabularySetContainer';

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
    this.checkAndCreateNewWordInVocabulary = this.checkAndCreateNewWordInVocabulary.bind(
      this
    );
    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.vocabularyList !== this.props.vocabularyList) {
      this.setState({
        vocabularySet: nextProps.vocabularyList
      });
    }
  }

  checkAndCreateNewWordInVocabulary() {
    const word = this.state.word.trim();
    if (word === '') {
      this.setState({
        message: `Empty values cannot be added to vocabulary set.`,
        messageClass: 'message-error'
      });
    } else if (this.state.vocabularySet.length === 15) {
      this.setState({
        message: `You already have 15 words in vocabulary, Please delete few to add more.`,
        messageClass: 'message-error'
      });
    } else if (!this.state.vocabularySet.includes(word)) {
      this.setState({
        word: '',
        message: `Word ${word} added to your vocabulary.`,
        messageClass: 'message-success'
      });
      this.props.appendVocabulary(this.state.vocabularySet, word);
    } else {
      this.setState({
        message: `Word ${word} is already in your vocabulary.`,
        messageClass: 'message-error'
      });
    }
  }

  submit() {
    const vocabularyLength = this.state.vocabularySet.length;
    if (vocabularyLength === 15) {
      console.log(this.state.vocabularySet);
      this.setState({
        message: `Your vocabulary set is successfully printed in console`,
        messageClass: 'message-success'
      });
    } else {
      this.setState({
        message: `You have ${vocabularyLength} words in vocabulary, Please add ${15 -
          vocabularyLength} more and submit.`,
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
        <VocabularySetContainer />
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
          <Button className="Button_primary" onClick={() => this.submit()}>
            submit
          </Button>
        </div>
      </div>
    );
  }
}

VocabularyComponent.propTypes = {
  vocabularyList: PropTypes.array,
  appendVocabulary: PropTypes.func
};

export default VocabularyComponent;
