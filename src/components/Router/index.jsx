import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import User from '../../pages/User';

export default function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/:username" component={User} />
    </BrowserRouter>
  );
}
