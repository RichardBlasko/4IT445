import React from 'react';

import {Layout} from "../atoms/Layout";
import {AdminDiagnosisForm} from "../molecules/AdminDiagnosisForm";

export const AdminDiagnosisFormTemplate = ({ title, paragraph }) => (
    <Layout>
      <AdminDiagnosisForm/>
    </Layout>
);
