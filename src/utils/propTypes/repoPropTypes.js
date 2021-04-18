import PropTypes from 'prop-types';

export const repoPropTypes = PropTypes.shape({
  description: PropTypes.description,
  forks_count: PropTypes.number,
  full_name: PropTypes.string,
  url: PropTypes.string,
  name: PropTypes.string,
  stargazers_count: PropTypes.number,
  watchers_count: PropTypes.number,
});
