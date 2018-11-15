import React from 'react';

import {Layout} from '../atoms/Layout';
import {Column} from "../atoms/Column";
import {Row} from "../atoms/Row";
import {Button} from "../atoms/Button/Button";
import {AdminInfoCard} from "../molecules/AdminInfoCard";

export const AdminInfoBlock2 = ({children}) => (
  <Layout className="part-60 wrapper pb-5 orange container50">
    <Row className={"justify-content-center"}>
      <Column lg={7} md={7} sm={12} xs={12}>
          <Row>
            <Column lg={4} md={4} sm={6} xs={12} className={"mb-2"}>
              <AdminInfoCard
                about={"Příběhy"}
                number={"32"}
              />
            </Column>
            <Column lg={4} md={4} sm={6} xs={12} className={"mb-2"}>
              <AdminInfoCard
                about={"Události"}
                number={"13"}
              />
            </Column>
            <Column lg={4} md={4} sm={6} xs={12} className={"mb-2"}>
              <AdminInfoCard
                about={"Příspěvky"}
                number={"13/151"}
              />
            </Column>
          </Row>
      </Column>
    </Row>
  </Layout>
);
