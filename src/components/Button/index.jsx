import React from 'react';
import PropTypes from 'prop-types';

function Button({
  children, type, onClick, ...rest
}) {
  return <button {...rest} type={type} onClick={onClick}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  type: 'button',
  onClick: () => null,
};

export { Button };
