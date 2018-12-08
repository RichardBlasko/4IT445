import React from 'react';

import {Layout} from "../atoms/Layout";
import {AdminPreventionEditForm} from "../molecules/AdminPreventionEditForm";
import {ADMINLECIMSE} from "../../mocks/AdminLecimSe";
import {ADMINANAMNESIS} from "../../mocks/AdminAnamnesis";

import { ErrorMessage } from '../molecules/ErrorMessage';
import { LoadingIndicator } from '../molecules/LoadingIndicator';

export const AdminPreventionEditFormTemplate = ({
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
        <AdminPreventionEditForm lecimse={ADMINLECIMSE} anamnesis={ADMINANAMNESIS} diagnozy={diagnozy}/>
      </Layout>
    </Layout>
  );
};
