import React from 'react';

import {Layout} from "../atoms/Layout";

import {AdminNavBar} from "../molecules/AdminNavBar";
import {AdminPartnersListBlock} from "../organisms/AdminPartnersListBlock";

import { ErrorMessage } from '../molecules/ErrorMessage';
import { LoadingIndicator } from '../molecules/LoadingIndicator';

export const AdminPartnersListTemplate = ({
  isLoading,
  isLoaded,
  isError,
  partneri,
  error,
}) => {
  if (isError && !isLoading) {
    return <ErrorMessage error={error} />;
  }

  if (isLoading && !isLoaded) {
    return <LoadingIndicator />;
  }

  return (
  <Layout className="adminpage-background">
    <Layout className="adminpage-background-overlay">
      <AdminNavBar/>
      <AdminPartnersListBlock partneri={partneri} />
    </Layout>
  </Layout>
  );
};
