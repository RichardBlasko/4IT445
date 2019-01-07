import React from 'react';

import {Layout} from "../atoms/Layout";
import AdminDiagnosisEditForm from "../molecules/AdminDiagnosisEditForm";

export const AdminDiagnosisEditFormTemplate = ({ title, paragraph }) => (
    <Layout>
      <AdminDiagnosisEditForm/>
    </Layout>
);
