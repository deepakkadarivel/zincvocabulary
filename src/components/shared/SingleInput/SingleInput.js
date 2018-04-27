import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './SingleInput.css';

const SingleInput = props => (
  <input
    className={cx('Input', props.className)}
    name={props.name}
    type={props.inputType}
    value={props.content}
    onChange={props.controlFunc}
    placeholder={props.placeholder}
  />
);

SingleInput.propTypes = {
  inputType: PropTypes.oneOf(['text', 'number']).isRequired,
  name: PropTypes.string.isRequired,
  controlFunc: PropTypes.func.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string
};

export default SingleInput;
