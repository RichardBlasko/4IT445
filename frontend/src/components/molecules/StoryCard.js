import React from 'react';
import {Layout} from "../atoms/Layout";
import {Paragraph} from "../atoms/Paragraph";
import {Heading} from "../atoms/Heading";
import {Button} from "../atoms/Button/Button";
import {NavLink} from "../atoms/Nav/NavLink";
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";

export const StoryCard = ({ id, person, diagnose, story, img}) => (
  <Layout className={"card"}>
    <Layout className="section mt-2 mb-2">
      <Layout className="container">
        <Row>
          <Column lg={12} md={12}  className="mt-1 mt-md-0">
              <Heading level={4} className="card-title">{person}</Heading>
              <Heading level={6} className="card-title">{diagnose}</Heading>
              <Paragraph className="text-justify">
                {story}
              </Paragraph>
            <NavLink exact to={`/pribehy/${id}`}>
              <Button title="Přečíst si celý příběh" variant="read"/>
            </NavLink>
          </Column>
        </Row>
      </Layout>
    </Layout>
  </Layout>
);
