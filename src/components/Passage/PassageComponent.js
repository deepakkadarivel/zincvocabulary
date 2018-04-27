import React, { Component } from 'react';
import './Passage.css';
import Button from '../shared/Button/Button';
import TextArea from '../shared/TextArea/TextArea';
import PropTypes from 'prop-types';

class PassageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passage: ''
    };
    this.handlePassageChange = this.handlePassageChange.bind(this);
  }

  handlePassageChange(e) {
    this.setState({ passage: e.target.value });
  }

  render() {
    return (
      <div className="PassageComponent">
        <p className="passage_title">
          Paste your text and Zinc will identify the vocabulary words.
        </p>
        <TextArea
          className="TextArea_passage"
          rows={5}
          resize={false}
          content={this.state.passage}
          name={'passage'}
          controlFunc={this.handlePassageChange}
          placeholder={'Enter your passage here.'}
        />
        <Button className="Button_primary">next</Button>
      </div>
    );
  }
}

PassageComponent.propTypes = {
  updatePassage: PropTypes.func
};

export default PassageComponent;
