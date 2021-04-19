import React from 'react';

import SearchForm from './SearchForm';
import SearchUserResult from './SearchUserResult';

export default function Home() {
  return (
    <>
      <section className="c-landing">
        <h1 className="c-landing__title">Search over 56 million developers</h1>
        <p className="c-landing__subtitle">GitHub is the largest and most advanced development platform in the world</p>
      </section>
      <SearchForm />
      <SearchUserResult />
    </>
  );
}
