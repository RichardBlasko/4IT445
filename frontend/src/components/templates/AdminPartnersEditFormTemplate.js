import React from 'react';

import {Layout} from "../atoms/Layout";
import {AdminPartnersEditForm} from "../molecules/AdminPartnersEditForm";

import { ErrorMessage } from '../molecules/ErrorMessage';
import { LoadingIndicator } from '../molecules/LoadingIndicator';

export const AdminPartnersEditFormTemplate = ({
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
      <AdminPartnersEditForm diagnozy={diagnozy}/>
    </Layout>
  );
};
