import React from 'react';
import PropTypes from 'prop-types';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export { ErrorFallback };
