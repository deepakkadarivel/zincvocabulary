import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../Vocabulary.css';

class VocabularySet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vocabularySet: props.vocabularyList
    };
    this.renderVocabularySet = this.renderVocabularySet.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.vocabularyList !== this.props.vocabularyList) {
      this.setState({
        vocabularySet: nextProps.vocabularyList
      });
    }
  }

  delete = word => {
    this.props.deleteVocabulary(this.props.vocabularyList, word);
  };

  renderVocabularySet() {
    return this.state.vocabularySet.map(vocabulary => {
      return (
        <li key={vocabulary} className="vocabulary_list_item">
          <div className="word">
            <span>{vocabulary}</span>{' '}
            <button className="close" onClick={() => this.delete(vocabulary)}>
              &#10005;
            </button>
          </div>
        </li>
      );
    });
  }

  render() {
    return <div className="vocabulary_list">{this.renderVocabularySet()}</div>;
  }
}

VocabularySet.propTypes = {
  vocabularyList: PropTypes.array,
  deleteVocabulary: PropTypes.func
};

export default VocabularySet;
