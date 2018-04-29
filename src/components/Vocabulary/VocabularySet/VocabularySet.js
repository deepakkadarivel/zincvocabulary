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
      return (
        <li key={vocabulary} className="vocabulary_list_item">
          <div className="word">
            <span>{vocabulary}</span>{' '}
            <button className="close">&#10005;</button>
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
