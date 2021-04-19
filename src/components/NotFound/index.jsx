import React from 'react';
import PropTypes from 'prop-types';

function NotFound({ title, message }) {
  return (
    <section className="c-notfound">
      <h1 className="c-notfound__title">{title}</h1>
      { message && <p className="c-notfound__message">{message}</p> }
    </section>
  );
}

NotFound.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
};

NotFound.defaultProps = {
  message: null,
};

export { NotFound };
