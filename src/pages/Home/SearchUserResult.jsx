import React from 'react';
import { useSelector } from 'react-redux';

import { Loading, NotFound } from '../../components';
import { isEmpty } from '../../utils';

function SearchUserResult() {
  const { user, isLoading } = useSelector((state) => state.users);

  if (!user) return null;
  if (isLoading) return <Loading />;
  if (isEmpty(user)) return <NotFound />;

  return <div>{user.login}</div>;
}

export default SearchUserResult;
