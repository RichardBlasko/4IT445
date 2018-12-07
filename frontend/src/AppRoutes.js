import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {HomePage} from './components/pages/HomePage';
import {PreventionListPage} from "./components/pages/PreventionListPage";
import {DiagnoseListPage} from "./components/pages/DiagnoseListPage";
import {StoryListPage} from "./components/pages/StoryListPage";
import {EventListPage} from "./components/pages/EventListPage";
import {SocialNetworkListPage} from "./components/pages/SocialNetworkListPage";

import {AdminHomePage} from "./components/pages/AdminHomePage";
import {AboutPage} from "./components/pages/AboutPage";
import {AdminLoginPage} from "./components/pages/AdminLoginPage";
import {AdminPreventionPage} from "./components/pages/AdminPreventionPage";
import {AdminDiagnosisPage} from "./components/pages/AdminDiagnosisPage";
import {AdminStoryPage} from "./components/pages/AdminStoryPage";
import {AdminEventPage} from "./components/pages/AdminEventPage";
import {AdminSocialPage} from "./components/pages/AdminSocialPage";
import {AdminPartnersPage} from "./components/pages/AdminPartnersPage";
import {AdminPreventionFormPage} from "./components/pages/AdminPreventionFormPage";
import {AdminDiagnosisFormPage} from "./components/pages/AdminDiagnosisFormPage";
import {AdminDiagnosisEditFormPage} from "./components/pages/AdminDiagnosisEditFormPage";
import {AdminPartnersFormPage} from "./components/pages/AdminPartnersFormPage";
import {PartnersPage} from "./components/pages/PartnersPage";

export const AppRoutes = () => (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/pribehy" exact component={StoryListPage} />
      <Route path="/prevence" exact component={PreventionListPage} />
      <Route path="/kalendar" exact component={EventListPage} />
      <Route path="/socialnisite" exact component={SocialNetworkListPage} />
      <Route path="/diagnozy" exact component={DiagnoseListPage} />
      <Route path="/projekt" exact component={AboutPage} />
      <Route path="/admin" exact component={AdminHomePage} />
      <Route path="/admin/Prevence" exact component={AdminPreventionPage} />
      <Route path="/admin/Diagnózy" exact component={AdminDiagnosisPage} />
      <Route path="/admin/Příběhy" exact component={AdminStoryPage} />
      <Route path="/admin/Události" exact component={AdminEventPage} />
      <Route path="/admin/Příspěvky" exact component={AdminSocialPage} />
      <Route path="/admin/Partneři" exact component={AdminPartnersPage} />
      <Route path="/admin/Prevence/formular" exact component={AdminPreventionFormPage} />
      <Route path="/admin/Diagnózy/formular" exact component={AdminDiagnosisFormPage} />
      <Route path="/admin/Diagnózy/formular/:id" exact component={AdminDiagnosisEditFormPage} />
      <Route path="/admin/Partneři/formular" exact component={AdminPartnersFormPage} />
      <Route path="/login" exact component={AdminLoginPage} />
      <Route path="/partneri" exact component={PartnersPage} />
    </Switch>
);
