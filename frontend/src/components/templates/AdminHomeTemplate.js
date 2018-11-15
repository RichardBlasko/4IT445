import React from 'react';

import {Layout} from "../atoms/Layout";
import {AdminInfoBlock} from "../organisms/AdminInfoBlock";
import {AdminInfoBlock2} from "../organisms/AdminInfoBlock2";
import {AdminNavBar} from "../molecules/AdminNavBar";

export const AdminHomeTemplate = ({ title, paragraph }) => (
    <Layout className="page-background">
      <Layout className="page-background-overlay ">
      <AdminNavBar/>
      <AdminInfoBlock/>
      <AdminInfoBlock2/>
    </Layout>
  </Layout>
);
