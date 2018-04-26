import React, { Component } from 'react';
import './Passage.css';
import Button from '../shared/Button/Button';

class PassageComponent extends Component {
  render() {
    return (
      <div className="PassageComponent">
        <p className="passage_title">
          Paste your text and Zinc will identify the vocabulary words.
        </p>
        <textarea rows="4" cols="50" className="passage_textarea">
          At w3schools.com you will learn how to make a website. We offer free
          tutorials in all web development technologies.
        </textarea>
        <Button className="Button_primary">next</Button>
      </div>
    );
  }
}
export default PassageComponent;
