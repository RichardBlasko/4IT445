import React from 'react';
import {Layout} from "../atoms/Layout";
import {Paragraph} from "../atoms/Paragraph";
import {Heading} from "../atoms/Heading";
import {Button} from "../atoms/Button/Button";
import {NavLink} from "../atoms/Nav/NavLink";
import {Row} from "../atoms/Row";

export const StoryCard2 = ({ id, person, diagnose, story, img}) => (
  <Layout className={"card"}>
    <Layout className="section mt-2 mb-2">
      <Layout className="container">
        <Row>
          <div className="col-md-12 col-lg-12 mt-1 mt-md-0">
              <Heading level={4} className="card-title">{person}</Heading>
              <Heading level={6} className="card-title">{diagnose}</Heading>
              <Paragraph className="text-justify">
                {story}
              </Paragraph>
            <NavLink exact to={`/pribehy/${id}`}>
              <Button title="Přečíst si celý příběh" variant="read"/>
            </NavLink>
          </div>
        </Row>
      </Layout>
    </Layout>
  </Layout>
);
