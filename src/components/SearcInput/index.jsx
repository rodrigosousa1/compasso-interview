import PropTypes from 'prop-types';
import React from 'react';

import { Input } from '../Input';

function SearchInput({
  onChange, onBlur, value, name, ...rest
}) {
  return (
    <div className="c-search">
      <div className="c-search__container">
        <span className="c-search__icon">
          <svg width="15px" height="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" aria-hidden="true">
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Artboard-1" stroke="#777777" strokeWidth="1.3">
                <g id="Group">
                  <path d="M13.4044,7.0274 C13.4044,10.5494 10.5494,13.4044 7.0274,13.4044 C3.5054,13.4044 0.6504,10.5494 0.6504,7.0274 C0.6504,3.5054 3.5054,0.6504 7.0274,0.6504 C10.5494,0.6504 13.4044,3.5054 13.4044,7.0274 Z" id="Stroke-3" />
                  <path d="M11.4913,11.4913 L17.8683,17.8683" id="Stroke-7" />
                </g>
              </g>
            </g>
          </svg>
        </span>
        <Input
          {...rest}
          className="c-search__input"
          name={name}
          type="search"
          placeholder="Search users"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </div>
    </div>
  );
}

SearchInput.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
};

SearchInput.defaultProps = {
  onChange: () => null,
  onBlur: () => null,
  value: null,
  name: null,
};

export { SearchInput };
