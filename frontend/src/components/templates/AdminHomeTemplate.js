import React from 'react';

import {Layout} from "../atoms/Layout";
import {AdminInfoBlock} from "../organisms/AdminInfoBlock";
import {TopNavBar} from "../molecules/TopNavBar";

export const AdminHomeTemplate = ({ title, paragraph }) => (
  <Layout>
    <TopNavBar/>
    <AdminInfoBlock/>
  </Layout>
);
