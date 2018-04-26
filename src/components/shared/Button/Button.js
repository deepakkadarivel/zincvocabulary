import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Button.css';

const Button = props => {
  const { children, className, onClick, ...others } = props;

  return (
    <button {...others} className={cx('Button', className)} onClick={onClick}>
      {children}
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
