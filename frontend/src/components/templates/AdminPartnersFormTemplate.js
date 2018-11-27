import React from 'react';

import {Layout} from "../atoms/Layout";
import {AdminPartnersForm} from "../molecules/AdminPartnersForm";

import { ErrorMessage } from '../molecules/ErrorMessage';
import { LoadingIndicator } from '../molecules/LoadingIndicator';

export const AdminPartnersFormTemplate = ({
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
      <AdminPartnersForm diagnozy={diagnozy}/>
    </Layout>
  );
};
