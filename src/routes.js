import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/';
import Dashboard from './components/Dashboard/';
import NotFoundPage from './components/NotFoundPage/';
import Login from './components/Login/';
import Signup from './components/Signup/';
import DisplaySection from './components/DisplaySection/';
import Account from './components/Account/';
import DetailsPage from './components/DetailsPage/';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './auth';

export default (
  <Route path="/" component={App}>
    <Route component={UserIsNotAuthenticated(Account)}>
      <IndexRoute component={Login}/>
      <Route path="/signup" component={Signup} />
    </Route>
    <Route component={UserIsAuthenticated(Dashboard)}>
      <Route path="/users" component={DisplaySection} />
      <Route path="/groups" component={DisplaySection} />
      <Route path="/user/:itemId" component={DetailsPage} />
      <Route path="/group/:itemId" component={DetailsPage} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
