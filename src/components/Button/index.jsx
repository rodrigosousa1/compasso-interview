import React from 'react';
import PropTypes from 'prop-types';

function Button({ children }) {
  return <button type="button">{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: null,
};

export default Button;
