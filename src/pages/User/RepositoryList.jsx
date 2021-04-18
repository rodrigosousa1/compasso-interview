import PropTypes from 'prop-types';
import React from 'react';

import { Loading } from '../../components';
import { repoPropTypes } from '../../utils/propTypes';
import RepositoryCard from './RepositoryCard';

function RepositoryList({ data, loading }) {
  if (loading) return <Loading />;
  return data.map((repo) => <RepositoryCard key={repo.full_name} repo={repo} />);
}

RepositoryList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(repoPropTypes)).isRequired,
  loading: PropTypes.bool,
};

RepositoryList.defaultProps = {
  loading: false,
};

export default RepositoryList;
