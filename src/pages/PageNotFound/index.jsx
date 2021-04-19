import React from 'react';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '../../components';
import { clearUserState } from '../../redux/modules/users';

export default function PageNotFound() {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(clearUserState());
    history.push('/');
  }

  return (
    <section className="c-notfound">
      <h1 className="c-notfound__code">404</h1>
      <p className="c-notfound__title">Something&apos;s missing</p>
      <p className="c-notfound__message">The page you looking is not found.</p>
      <Button className="c-button" type="button" onClick={handleClick}>Go to homepage</Button>
    </section>
  );
}
