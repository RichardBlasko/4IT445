import React from 'react';

import {Layout} from '../atoms/Layout';
import {Column} from "../atoms/Column";
import {Row} from "../atoms/Row";
import {Button} from "../atoms/Button/Button";
import {AdminInfoCard} from "../molecules/AdminInfoCard";

export const AdminInfoBlock = ({children}) => (
  <Layout className="part-60 wrapper pb-5 orange container50">
    <Row className={"justify-content-center"}>
      <Column lg={10} md={10} sm={12} xs={12}>
          <Row>
            <Column lg={3} md={4} sm={6} xs={12} className={"mb-4"}>
              <AdminInfoCard
                about={"Příběhy"}
                number={"32"}
              />
            </Column>
            <Column lg={3} md={4} sm={6} xs={12} className={"mb-4"}>
              <AdminInfoCard
                about={"Prevence"}
                number={"80"}
              />
            </Column>
            <Column lg={3} md={4} sm={6} xs={12} className={"mb-4"}>
              <AdminInfoCard
                about={"Události"}
                number={"13"}
              />
            </Column>
            <Column lg={3} md={4} sm={6} xs={12} className={"mb-4"}>
              <AdminInfoCard
                about={"Soc. sítě"}
                number={"13/151"}
              />
            </Column>
          </Row>
      </Column>
    </Row>
  </Layout>
);
