import React from 'react';

import { repoPropTypes } from '../../utils/propTypes';

function RepositoryCard({ repo }) {
  return (
    <article>
      <h1>{repo.full_name}</h1>
      <p>{repo.description}</p>
      <p>
        Fork:
        {repo.forks_count}
      </p>
      <p>
        Star:
        {repo.stargazers_count}
      </p>
      <p>
        Watch:
        {repo.watchers_count}
      </p>
    </article>
  );
}

RepositoryCard.propTypes = {
  repo: repoPropTypes.isRequired,
};

export default RepositoryCard;
