import React from 'react';

import {Layout} from '../atoms/Layout';
import {Row} from "../atoms/Row";
import {Button} from "../atoms/Button/Button";
import { Link } from '../atoms/Link';
import {AdminPartnersTable} from "../molecules/AdminPartnersTable";

export const AdminPartnersListBlock = ({
  partneri,
  children
}) => (
  <Layout className="part-60 wrapper pb-5 container81">
    <Row className={"justify-content-center pt-2 mb-3"}>
      <Layout className={"col-md-8 col-xs-8 card-radius grey p-4"}>
          <AdminPartnersTable partneri={partneri}/>
      </Layout>
    </Row>
    <Row className={"justify-content-center pt-2 mb-3"}>
      <Layout className={"col-md-2 col-xs-2 card-radius p-4"}>
        <Link to={"/admin/Partneři/formular"}>
          <Button title={"Přidej Partnera"} variant="form" type="submit"/>
        </Link>
      </Layout>
    </Row>
  </Layout>
);
