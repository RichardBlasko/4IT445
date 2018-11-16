import React from 'react';

import {Layout} from "../atoms/Layout";
import {AdminPreventionForm} from "../molecules/AdminPreventionForm";
import {ADMINLECIMSE} from "../../mocks/AdminLecimSe";
import {ADMINANAMNESIS} from "../../mocks/AdminAnamnesis";
import {DIAGNOSIS} from "../../mocks/Diagnosis.js";

export const AdminPreventionFormTemplate = ({ title, paragraph }) => (
  <Layout>
    <Layout>
      <AdminPreventionForm lecimse={ADMINLECIMSE} anamnesis={ADMINANAMNESIS} diagnosis={DIAGNOSIS}/>
    </Layout>
  </Layout>
);
