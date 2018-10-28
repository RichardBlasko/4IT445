import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PageWrapper } from './components/organisms/PageWrapper';

import { HomePage } from './components/pages/HomePage';
import {PreventionListPage} from "./components/pages/PreventionListPage";
import {DiagnoseListPage} from "./components/pages/DiagnoseListPage";
import {StoryListPage} from "./components/pages/StoryListPage";
import {EventListPage} from "./components/pages/EventListPage";
import {SocialNetworkListPage} from "./components/pages/SocialNetworkListPage";

export const AppRoutes = () => (
  <PageWrapper>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/pribehy" exact component={StoryListPage} />
      <Route path="/prevence" exact component={PreventionListPage} />
      <Route path="/kalendar" exact component={EventListPage} />
      <Route path="/socialnisite" exact component={SocialNetworkListPage} />
      <Route path="/diagnozy" exact component={DiagnoseListPage} />
    </Switch>
  </PageWrapper>
);
