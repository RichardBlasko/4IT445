import React from 'react';

import {Layout} from "../atoms/Layout";

import {AdminNavBar} from "../molecules/AdminNavBar";
import {AdminPribehyListBlock} from "../organisms/AdminPribehyListBlock";

import { ErrorMessage } from '../molecules/ErrorMessage';
import { LoadingIndicator } from '../molecules/LoadingIndicator';

export const AdminPribehyListTemplate = ({
  isLoading,
  isLoaded,
  isError,
  pribehy,
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
        <AdminPribehyListBlock pribehy={pribehy} />
      </Layout>
    </Layout>
  );
};
