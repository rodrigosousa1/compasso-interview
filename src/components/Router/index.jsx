import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import User from '../../pages/User';
import Layout from '../Layout';

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:username" component={User} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
