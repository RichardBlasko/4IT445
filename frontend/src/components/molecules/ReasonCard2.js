import React from 'react';

import {Heading} from "../atoms/Heading";
import {Layout} from "../atoms/Layout";
import {FontIcon} from "../atoms/FontIcon";
import {CardTitle} from "../atoms/Card/CardTitle";
import {CardBody} from "../atoms/Card/CardBody";
import {Column} from "../atoms/Column";

export const ReasonCard2 = ({reason, icon, text}) => (
  <Layout className={"card grey"}>
    <Layout className="section mt-4 mb-4">
      <Layout className="container">
        <Layout className="row">
          <Column md={12} lg={12} className="mt-4 mt-md-0">
            <Layout className={"text-center"}>
              <FontIcon icon={icon} className={"reason-icon"}/>
            </Layout>
            <CardTitle className={"text-center"}>
              <Heading level={6} className="card-title">{reason}</Heading>
            </CardTitle>
            <CardBody className="text-justify p-0">
              {text}
            </CardBody>
          </Column>
        </Layout>
      </Layout>
    </Layout>
  </Layout>
);
