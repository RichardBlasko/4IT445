import React from 'react';

import {Layout} from "../atoms/Layout";
import {AdminDiagnosisForm} from "../molecules/AdminDiagnosisForm";
import {PREVENTIONS} from "../../mocks/Preventions";

export const AdminDiagnosisFormTemplate = ({ title, paragraph }) => (
  <Layout>
    <Layout>
      <AdminDiagnosisForm preventions={PREVENTIONS}/>
    </Layout>
  </Layout>
);
