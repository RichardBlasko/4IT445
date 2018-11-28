import React from 'react';

import {Layout} from "../atoms/Layout";
import {AdminPreventionForm} from "../molecules/AdminPreventionForm";
import {ADMINLECIMSE} from "../../mocks/AdminLecimSe";
import {ADMINANAMNESIS} from "../../mocks/AdminAnamnesis";

import { ErrorMessage } from '../molecules/ErrorMessage';
import { LoadingIndicator } from '../molecules/LoadingIndicator';

export const AdminPreventionFormTemplate = ({
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
      <Layout>
        <AdminPreventionForm lecimse={ADMINLECIMSE} anamnesis={ADMINANAMNESIS} diagnozy={diagnozy}/>
      </Layout>
    </Layout>
  );
};
