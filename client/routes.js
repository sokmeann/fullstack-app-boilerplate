import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router'; // eslint-disable-line

/* General */
import App from './app';

/* Website */
import LandingPage from './src/sample/LandingPage/LandingPageContainer';
import LoginPage from './src/sample/LoginPage/LoginContainer';
import SignUpPage from './src/sample/SignUpPage/SignUpContainer';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="home" />
    <Route path="home" component={LandingPage} />
    <Route path="login" component={LoginPage} />
    <Route path="signup" component={SignUpPage} />
  </Route>
);
