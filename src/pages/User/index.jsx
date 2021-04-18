import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { Loading } from '../../components';
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

  if (!user) return null;
  if (isLoading) return <Loading />;
  if (isEmpty(user)) return <PageNotFound />;

  return (
    <div>
      <img width="120" height="120" src={user.avatar_url} alt="User profile" />
      <h1>{user.name}</h1>
      <p>{`${user.login}`}</p>
      <p>{user.company}</p>
      <span>
        <ul>
          <li><Link to={`${username}?tab=repos`}>Repositories</Link></li>
          <li><Link to={`${username}?tab=starred`}>Starred Repositories</Link></li>
        </ul>
      </span>
      <h2>Repositories</h2>
      <RepositoryList data={repos} loading={isRepoLoading} />
    </div>
  );
}
