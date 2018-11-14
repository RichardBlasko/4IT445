import React from 'react';

import {Layout} from "../atoms/Layout";
import {AdminInfoBlock} from "../organisms/AdminInfoBlock";
import {AdminNavBar} from "../molecules/AdminNavBar";

export const AdminHomeTemplate = ({ title, paragraph }) => (
  <Layout className="page-background">
    <Layout className="page-background-overlay">
      <AdminNavBar/>
      <AdminInfoBlock/>
    </Layout>
  </Layout>
);
