import PropTypes from 'prop-types';
import React from 'react';

import { inputTypes } from '../../utils';

function Input({
  type, onChange, onBlur, value, name, ...rest
}) {
  return (
    <input
      {...rest}
      name={name}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(inputTypes).isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
};

Input.defaultProps = {
  onChange: () => null,
  onBlur: () => null,
  value: null,
  name: null,
};

export { Input };
