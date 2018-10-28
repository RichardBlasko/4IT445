import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PageWrapper } from './components/organisms/PageWrapper';

import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { AdminHomePage } from './components/pages/AdminHomePage';

export const AppRoutes = () => (
  <PageWrapper>
    <Switch>
      <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
      <Route path="/admin" exact component={AdminHomePage} />
    </Switch>
  </PageWrapper>
);
