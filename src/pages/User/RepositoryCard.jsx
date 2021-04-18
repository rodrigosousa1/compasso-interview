import React from 'react';

import { numberFormatter } from '../../utils';
import { repoPropTypes } from '../../utils/propTypes';
import { useQuery } from '../../hooks';

function RepositoryCard({ repo }) {
  const { tab } = useQuery();

  return (
    <div className="c-card">
      <section className="c-card__info">
        <h1 className="c-card__title">{tab === 'starred' ? repo.full_name : repo.name }</h1>
        <div className="c-card__content">
          <p>{repo.description}</p>
          <div className="c-badges">
            <div className="c-badges__item c-badges__item--dark">
              <span className="c-badges__text c-badges__text--bold c-badges__text--white">{numberFormatter.format(repo.forks_count)}</span>
              <span className="c-badges__text">Fork</span>
            </div>
            <div className="c-badges__item c-badges__item--dark">
              <span className="c-badges__text c-badges__text--bold c-badges__text--white">{numberFormatter.format(repo.stargazers_count)}</span>
              <span className="c-badges__text">Star</span>
            </div>
            <div className="c-badges__item c-badges__item--dark">
              <span className="c-badges__text c-badges__text--bold c-badges__text--white">{numberFormatter.format(repo.watchers_count)}</span>
              <span className="c-badges__text">Watch</span>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

RepositoryCard.propTypes = {
  repo: repoPropTypes.isRequired,
};

export default RepositoryCard;
