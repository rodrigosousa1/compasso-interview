import PropTypes from 'prop-types';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback, Loading, NotFound } from '../../components';
import { repoPropTypes } from '../../utils/propTypes';
import RepositoryCard from './RepositoryCard';
import { useQuery } from '../../hooks';

function RepositoryList({ data, loading }) {
  const { tab } = useQuery();

  if (loading) return <Loading />;
  if (data.length === 0) {
    const message = tab === 'starred'
      ? 'This user has no starred repositories.'
      : 'This user has no repositories yet.';

    return <NotFound title="No repositories found" message={message} />;
  }

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
