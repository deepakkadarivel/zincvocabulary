import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './TextArea.css';

const TextArea = props => {
  return (
    <textarea
      className={cx('TextArea', props.className)}
      style={props.resize ? null : { resize: 'none' }}
      name={props.name}
      rows={props.rows}
      value={props.content}
      onChange={props.controlFunc}
      placeholder={props.placeholder}
    />
  );
};

TextArea.propTypes = {
  className: PropTypes.string.isRequired,
  rows: PropTypes.number,
  name: PropTypes.string,
  content: PropTypes.string,
  resize: PropTypes.bool,
  placeholder: PropTypes.string,
  controlFunc: PropTypes.func.isRequired
};

export default TextArea;
