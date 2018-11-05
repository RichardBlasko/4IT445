import React from 'react';

import {Layout} from "../atoms/Layout";
import {AdminInfoBlock} from "../organisms/AdminInfoBlock";
import {AdminNavBar} from "../molecules/AdminNavBar";

import {PREVENTIONS} from "../../mocks/Preventions";
import {AdminPreventionCard} from "../molecules/AdminPreventionCard";

export const AdminHomeTemplate = ({ title, paragraph }) => (
  <Layout>
    <AdminNavBar/>
    <AdminInfoBlock/>
    <AdminPreventionCard/>
  </Layout>
);
