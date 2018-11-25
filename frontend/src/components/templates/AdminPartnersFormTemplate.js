import React from 'react';

import {Layout} from "../atoms/Layout";
import {AdminPartnersForm} from "../molecules/AdminPartnersForm";

export const AdminPartnersFormTemplate = ({ title, paragraph }) => (
    <Layout>
      <AdminPartnersForm/>
    </Layout>
);
