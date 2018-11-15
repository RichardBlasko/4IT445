import React from 'react';

import {Layout} from "../atoms/Layout";

import {AdminNavBar} from "../molecules/AdminNavBar";
import {AdminPreventionListBlock} from "../organisms/AdminPreventionListBlock";

import { ErrorMessage } from '../molecules/ErrorMessage';
import { LoadingIndicator } from '../molecules/LoadingIndicator';

export const AdminPreventionListTemplate = ({
  isLoading,
  isLoaded,
  isError,
  prevence,
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
        <AdminPreventionListBlock prevence={prevence} />
      </Layout>
    </Layout>
  );
};
