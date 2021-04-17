import React from 'react';
import { useSelector } from 'react-redux';

import { Loading, NotFound } from '../../components';
import { isEmpty } from '../../utils';
import UserCard from './UserCard';

function SearchUserResult() {
  const { user, isLoading } = useSelector((state) => state.users);

  if (!user) return null;
  if (isLoading) return <Loading />;
  if (isEmpty(user)) return <NotFound />;

  return <UserCard user={user} />;
}

export default SearchUserResult;
