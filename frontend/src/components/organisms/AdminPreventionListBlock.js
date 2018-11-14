import React from 'react';

import {Layout} from '../atoms/Layout';
import {Column} from "../atoms/Column";
import {Row} from "../atoms/Row";
import {Button} from "../atoms/Button/Button";
import {AdminPreventionTable} from "../molecules/AdminPreventionTable";

export const AdminPreventionListBlock = ({children}) => (
  <Layout className="part-60 wrapper pb-5 orange container100">
    <Row className={"justify-content-center pt-2 mb-3"}>
      <Layout className={"col-md-10 col-xs-11 card-radius grey-light p-4"}>
        <AdminPreventionTable />
      </Layout>
    </Row>
  </Layout>
);
