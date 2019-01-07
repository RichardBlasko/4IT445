import React from 'react';
import {Layout} from "../atoms/Layout";
import {AdminPribehyForm} from "../molecules/AdminPribehyForm";
import { ErrorMessage } from '../molecules/ErrorMessage';
import { LoadingIndicator } from '../molecules/LoadingIndicator';

export const AdminPribehyFormTemplate = ({
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
      <AdminPribehyForm diagnozy={diagnozy}/>
    </Layout>
  );
};
