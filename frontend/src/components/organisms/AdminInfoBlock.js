import React from 'react';

import {Layout} from '../atoms/Layout';
import {Column} from "../atoms/Column";
import {Row} from "../atoms/Row";
import {Button} from "../atoms/Button/Button";
import {AdminInfoCard} from "../molecules/AdminInfoCard";

export const AdminInfoBlock = ({children}) => (
  <Layout className="part-60 wrapper pb-5 container50">
    <Row className={"justify-content-center"}>
      <Column lg={5} md={5} sm={12} xs={12}>
          <Row>
            <Column lg={6} md={4} sm={6} xs={12} className={"mb-2"}>
              <AdminInfoCard
                about={"Prevence"}
                number={"32"}
              />
            </Column>
            <Column lg={6} md={4} sm={6} xs={12} className={"mb-2"}>
              <AdminInfoCard
                about={"Diagnózy"}
                number={"80"}
              />
            </Column>
          </Row>
      </Column>
    </Row>
  </Layout>
);
