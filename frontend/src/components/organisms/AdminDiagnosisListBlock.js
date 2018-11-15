import React from 'react';

import {Layout} from '../atoms/Layout';
import {Row} from "../atoms/Row";
import {Button} from "../atoms/Button/Button";
import {AdminDiagnosisTable} from "../molecules/AdminDiagnosisTable";

export const AdminDiagnosisListBlock = ({
  diagnozy,
  children
}) => (
  <Layout className="part-60 wrapper pb-5">
    <Row className={"justify-content-center pt-2 mb-3"}>
      <Layout className={"col-md-8 col-xs-8 card-radius orange p-4"}>
          <AdminDiagnosisTable diagnozy={diagnozy}/>
      </Layout>
    </Row>
    <Row className={"justify-content-center pt-2 mb-3"}>
      <Layout className={"col-md-3 col-xs-3 card-radius p-4"}>
        <Button title={"Přidej Diagnózu"} variant="form" type="submit"/>
      </Layout>
    </Row>
  </Layout>
);
