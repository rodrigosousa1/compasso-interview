import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../components/Button';
import { userPropTypes } from '../../utils/propTypes';

function UserCard({ user }) {
  const history = useHistory();

  function handleDetailsClick() {
    history.push(`/${user.login}`);
  }

  return (
    <div className="c-card">
      <img className="c-card__avatar" src={user.avatar_url} alt="User profile" />
      <section className="c-card__info">
        <h1 className="c-card__title">{user.name}</h1>
        <p className="c-card__subtitle">{`${user.login}`}</p>
        <div className="c-card__content">
          <p>{user.bio}</p>
          <div className="c-badges">
            <div className="c-badges__item c-badges__item--dark">
              <span className="c-badges__text c-badges__text--bold c-badges__text--white">{user.followers}</span>
              <span className="c-badges__text">followers</span>
            </div>
            <div className="c-badges__item c-badges__item--dark">
              <span className="c-badges__text c-badges__text--bold c-badges__text--white">
                {user.following}
              </span>
              <span className="c-badges__text">following</span>
            </div>
          </div>
        </div>
      </section>
      <div className="c-card__actions">
        <Button className="c-button" type="button" onClick={handleDetailsClick}>
          More details
        </Button>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: userPropTypes.isRequired,
};

export default UserCard;
