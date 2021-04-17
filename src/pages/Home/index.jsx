import React from 'react';

import SearchForm from './SearchForm';
import SearchUserResult from './SearchUserResult';

export default function Home() {
  return (
    <div>
      <SearchForm />
      <SearchUserResult />
    </div>
  );
}
