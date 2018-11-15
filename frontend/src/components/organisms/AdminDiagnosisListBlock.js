import React from 'react';

import {Layout} from '../atoms/Layout';
import {Row} from "../atoms/Row";
import {AdminDiagnosisTable} from "../molecules/AdminDiagnosisTable";

export const AdminDiagnosisListBlock = ({
  diagnozy,
  children
}) => (
  <Layout className="part-60 wrapper pb-5">
    <Row className={"justify-content-center pt-2 mb-3"}>
      <Layout className={"col-md-8 col-xs-8 card-radius grey p-4"}>
          <AdminDiagnosisTable diagnozy={diagnozy}/>
      </Layout>
    </Row>
  </Layout>
);
