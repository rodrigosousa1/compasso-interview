import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, type }) {
  return <button type={type}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  children: null,
  type: 'button',
};

export { Button };
