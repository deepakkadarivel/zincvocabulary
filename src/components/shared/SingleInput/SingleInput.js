import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './SingleInput.css';

class SingleInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageClass: props.messageClass
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.messageClass !== this.props.messageClass) {
      this.setState({
        messageClass: nextProps.messageClass
      });
    }
  }

  render() {
    return (
      <div>
        <input
          className={cx('Input', this.props.className)}
          name={this.props.name}
          type={this.props.inputType}
          value={this.props.content}
          onChange={this.props.controlFunc}
          placeholder={this.props.placeholder}
        />
        <label className={cx('message-label', this.state.messageClass)}>
          {this.props.message}
        </label>
      </div>
    );
  }
}

SingleInput.propTypes = {
  className: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['text', 'number']).isRequired,
  name: PropTypes.string.isRequired,
  controlFunc: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  message: PropTypes.string,
  messageClass: PropTypes.string
};

export default SingleInput;
