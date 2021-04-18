import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useDispatch, useSelector } from 'react-redux';

import { ErrorFallback, Loading, NotFound } from '../../components';
import { clearUserState } from '../../redux/modules/users';
import { isEmpty } from '../../utils';
import UserCard from './UserCard';

function SearchUserResult() {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.users);

  function onReset() {
    dispatch(clearUserState());
  }

  if (!user) return null;
  if (isLoading) return <Loading />;
  if (isEmpty(user)) return <NotFound />;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={onReset}>
      <UserCard user={user} />
    </ErrorBoundary>
  );
}

export default SearchUserResult;
