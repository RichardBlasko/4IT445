import React from 'react';

import {Heading} from "../atoms/Heading";
import {Layout} from "../atoms/Layout";
import {CardTitle} from "../atoms/Card/CardTitle";
import {CardBody} from "../atoms/Card/CardBody";
import {Column} from "../atoms/Column";
import {Button} from "../atoms/Button/Button";
import {Row} from "../atoms/Row";
import {NavLink} from "../atoms/Nav/NavLink";
import { Link } from '../atoms/Link';

export const AdminInfoCard = ({about, number}) => (
  <Layout className={"card grey"}>
    <Layout className="section mt-4 mb-4">
      <Layout className="container">
          <Column md={12} lg={12} className="mt-4 mt-md-0">
            <CardTitle className={"text-left"}>
              <NavLink exact to={"/admin/" + about} className="linkprevence">
                <Heading level={3}>{about}</Heading>
              </NavLink>
            </CardTitle>
            <CardBody className="text-right">
              <Heading level={2}>{number}</Heading>
            </CardBody>
          </Column>
                <Row className={"justify-content-center"}>
                <Link to={"/admin/" + about + "/formular"}>
                  <Button title={"Přidej " + about} variant="admin" type="submit"/>
                </Link>
                </Row>
      </Layout>
    </Layout>
  </Layout>
);
