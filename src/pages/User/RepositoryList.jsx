import PropTypes from 'prop-types';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback, Loading } from '../../components';
import { repoPropTypes } from '../../utils/propTypes';
import RepositoryCard from './RepositoryCard';

function RepositoryList({ data, loading }) {
  if (loading) return <Loading />;

  return data.map((repo) => (
    <ErrorBoundary key={repo.full_name} FallbackComponent={ErrorFallback}>
      <RepositoryCard repo={repo} />
    </ErrorBoundary>
  ));
}

RepositoryList.propTypes = {
  data: PropTypes.arrayOf(repoPropTypes).isRequired,
  loading: PropTypes.bool,
};

RepositoryList.defaultProps = {
  loading: false,
};

export default RepositoryList;
