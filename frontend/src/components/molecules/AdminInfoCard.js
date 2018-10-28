import React from 'react';

import {Heading} from "../atoms/Heading";
import {Layout} from "../atoms/Layout";
import {CardTitle} from "../atoms/Card/CardTitle";
import {CardBody} from "../atoms/Card/CardBody";
import {Column} from "../atoms/Column";

export const AdminInfoCard = ({about, number}) => (
  <Layout className={"card grey"}>
    <Layout className="section mt-4 mb-4">
      <Layout className="container">
        <Layout className="row">
          <Column md={12} lg={12} className="mt-4 mt-md-0">
            <CardTitle className={"text-left"}>
              <Heading level={2}>{about}</Heading>
            </CardTitle>
            <CardBody className="text-right">
              <Heading level={1}>{number}</Heading>
            </CardBody>
          </Column>
        </Layout>
      </Layout>
    </Layout>
  </Layout>
);
