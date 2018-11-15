import React from 'react';

import {Layout} from '../atoms/Layout';
import {Row} from "../atoms/Row";
import {Button} from "../atoms/Button/Button";
import {AdminPreventionTable} from "../molecules/AdminPreventionTable";

export const AdminPreventionListBlock = ({
  prevence,
  children
}) => (
  <Layout className="part-60 wrapper pb-5 ">
    <Row className={"justify-content-center pt-2 mb-3"}>
      <Layout className={"col-md-8 col-xs-8 card-radius grey p-4"}>
        <AdminPreventionTable prevence={prevence}/>
        <Button title={"Pridaj Prevence"} variant="filter" type="submit"/>
      </Layout>
    </Row>
  </Layout>
);
