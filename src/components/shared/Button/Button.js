import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Button.css';

const Button = props => {
  return (
    <button className={cx('Button', props.className)} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  disabled: false
};

export default Button;
