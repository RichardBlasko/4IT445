import React from 'react';

import {Layout} from "../atoms/Layout";

import {AdminNavBar} from "../molecules/AdminNavBar";
import {AdminDiagnosisListBlock} from "../organisms/AdminDiagnosisListBlock";

import { ErrorMessage } from '../molecules/ErrorMessage';
import { LoadingIndicator } from '../molecules/LoadingIndicator';

export const AdminDiagnosisListTemplate = ({
  isLoading,
  isLoaded,
  isError,
  diagnozy,
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
      <AdminDiagnosisListBlock diagnozy={diagnozy} />
    </Layout>
  </Layout>
  );
};
