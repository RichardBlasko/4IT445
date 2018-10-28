import React from 'react';

import {Layout} from "../atoms/Layout";
import {AdminInfoBlock} from "../organisms/AdminInfoBlock";
import {AdminNavBar} from "../molecules/AdminNavBar";

export const AdminHomeTemplate = ({ title, paragraph }) => (
  <Layout>
    <AdminNavBar/>
    <AdminInfoBlock/>
  </Layout>
);
