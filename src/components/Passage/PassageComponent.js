import React, { Component } from 'react';
import './Passage.css';
import Button from '../shared/Button/Button';
import TextArea from '../shared/TextArea/TextArea';
import PropTypes from 'prop-types';
import passageInitialState from './passageInitialState';

class PassageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passage: ''
    };
    this.handlePassageChange = this.handlePassageChange.bind(this);
    this.clear = this.clear.bind(this);
  }

  handlePassageChange(e) {
    this.setState({ passage: e.target.value });
  }

  clear() {
    this.setState(
      {
        passage: passageInitialState.passage
      },
      () => {
        this.props.clearPassage();
      }
    );
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
        <div className="passage_footer">
          <Button className="Button_normal" onClick={() => this.clear()}>
            reset
          </Button>
          <Button
            className="Button_primary"
            onClick={() => this.props.updatePassage(this.state.passage)}
          >
            next
          </Button>
        </div>
      </div>
    );
  }
}

PassageComponent.propTypes = {
  updatePassage: PropTypes.func,
  clearPassage: PropTypes.func
};

export default PassageComponent;
