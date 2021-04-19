import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

import { Loading, Button } from '../../components';
import { useQuery } from '../../hooks';
import { fetchUser, fetchUserRepositories, clearUserState } from '../../redux/modules/users';
import { isEmpty } from '../../utils';
import PageNotFound from '../PageNotFound';
import RepositoryList from './RepositoryList';

export default function User() {
  const dispatch = useDispatch();
  const {
    user, isLoading, isRepoLoading, repos,
  } = useSelector((state) => state.users);
  const { username } = useParams();
  const { tab } = useQuery();

  useEffect(() => {
    if (!user) dispatch(fetchUser(username));
  }, []);

  useEffect(() => {
    dispatch(fetchUserRepositories(username, tab));
  }, [tab]);

  useEffect(() => function cleanup() {
    dispatch(clearUserState());
  }, []);

  function handleButtonClick() {
    window.open(user.html_url, '_blank').focus();
  }

  if (!user) return null;
  if (isLoading) return <Loading />;
  if (isEmpty(user)) return <PageNotFound />;

  return (
    <div className="l-profile-container">
      <div className="l-profile">
        <div className="c-profile">
          <img className="c-profile__picture" src={user.avatar_url} alt="User profile" />
          <section className="c-profile__info">
            <h1 className="c-profile__name">{user.name}</h1>
            <p className="c-profile__username">{user.login}</p>
            <p className="c-profile__bio">{user.bio}</p>
            <ul className="c-profile__personal-info">
              <li className="c-profile__item">{user.blog}</li>
              <li className="c-profile__item">{user.location}</li>
              <li className="c-profile__item">{user.company}</li>
            </ul>
            <Button onClick={handleButtonClick} className="c-button c-button--block" type="button">See this profile on Github</Button>
          </section>
        </div>
      </div>
      <div className="l-repos">
        <section className="c-repos">
          <h1 className="c-repos__title">Repositories</h1>
          <ul className="c-repos__navlinks">
            <li className="c-repos__item">
              <NavLink
                className={`c-repos__link ${!tab || tab === 'repos' ? 'c-repos__link--active' : ''}`}
                to={`${username}?tab=repos`}
              >
                Repositories
              </NavLink>
            </li>
            <li className="c-repos__item">
              <NavLink className={`c-repos__link ${tab === 'starred' ? 'c-repos__link--active' : ''}`} to={`${username}?tab=starred`}>
                Starred Repositories
              </NavLink>
            </li>
          </ul>
          <RepositoryList data={repos} loading={isRepoLoading} />
        </section>
      </div>
    </div>
  );
}
