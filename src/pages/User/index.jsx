import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { Loading, Button } from '../../components';
import { useQuery } from '../../hooks';
import { fetchUser, fetchUserRepositories } from '../../redux/modules/users';
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
    if (user) return;
    dispatch(fetchUser(username));
  }, []);

  useEffect(() => {
    if (!tab) return;
    dispatch(fetchUserRepositories(username, tab));
  }, [tab]);

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
      <section className="l-repos">
        <h1>Repositories</h1>
        <ul>
          <li><Link to={`${username}?tab=repos`}>Repositories</Link></li>
          <li><Link to={`${username}?tab=starred`}>Starred Repositories</Link></li>
        </ul>
        <RepositoryList data={repos} loading={isRepoLoading} />
      </section>
    </div>
  );
}
