import React from 'react';

import {Layout} from '../atoms/Layout';
import {Row} from "../atoms/Row";
import {Button} from "../atoms/Button/Button";
import { Link } from '../atoms/Link';
import {AdminPribehyTable} from "../molecules/AdminPribehyTable";

export const AdminPribehyListBlock = ({
  pribehy,
  children
}) => (

  <Layout className="part-60 wrapper pb-5 ">
    <Row className={"justify-content-center pt-2 mb-3"}>
      <Layout className={"col-md-8 col-xs-8 card-radius grey p-4"}>
        <AdminPribehyTable pribehy={pribehy}/>
      </Layout>
    </Row>
    <Row className={"justify-content-center  pt-2 mb-3"}>
      <Layout className={"col-md-2 col-xs-2 card-radius p-1"}>
      <Link to={"/admin/Příběhy/formular"}>
        <Button title={"Přidej příběhy"} variant="form" type="submit"/>
      </Link>
      </Layout>
    </Row>
  </Layout>
);
