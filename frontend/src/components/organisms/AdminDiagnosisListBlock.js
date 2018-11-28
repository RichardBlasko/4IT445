import React from 'react';

import {Layout} from '../atoms/Layout';
import {Row} from "../atoms/Row";
import {Button} from "../atoms/Button/Button";
import { Link } from '../atoms/Link';
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
      <Layout className={"col-md-2 col-xs-2 card-radius p-4"}>
        <Link to={"/admin/Diagnózy/formular"}>
          <Button title={"Přidej Diagnózu"} variant="form" type="submit"/>
        </Link>
      </Layout>
    </Row>
  </Layout>
);
