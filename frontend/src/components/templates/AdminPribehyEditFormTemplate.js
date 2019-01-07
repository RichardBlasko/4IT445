import React from 'react';

import {Layout} from "../atoms/Layout";
import {AdminPribehyEditForm} from "../molecules/AdminPribehyEditForm";

import { ErrorMessage } from '../molecules/ErrorMessage';
import { LoadingIndicator } from '../molecules/LoadingIndicator';

export const AdminPribehyEditFormTemplate = ({
  isLoading,
  isLoaded,
  isError,
  diagnozy,
  error,
 })=> {
   if (isError && !isLoading) {
     return <ErrorMessage error={error} />;
   }

   if (isLoading && !isLoaded) {
     return <LoadingIndicator />;
   }

   return (
    <Layout>
      <AdminPribehyEditForm diagnozy={diagnozy}/>
    </Layout>
  );
};
