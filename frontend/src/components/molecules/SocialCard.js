import React from 'react';
import {Column} from "../atoms/Column";
import {CardBody} from "../atoms/Card/CardBody";
import {FontIcon} from "../atoms/FontIcon";
import {Image} from "../atoms/Image";
import {Layout} from "../atoms/Layout";
import {Row} from "../atoms/Row";

export const SocialCard = ({id, author, type, img}) => (
  <Layout className={"card orange"}>
    <section className="section">
        <Row>
          <Column md={12} lg={12} className="mt-4 mt-md-0">
            <Image className="card-img-top" src={img} alt="Příspěvěk ze sociální sítě"/>
            <CardBody>
              @{author}
              <FontIcon icon={type} variant={"b"} className={"float-right pr-1 pt-1 white-text"}/>
            </CardBody>
          </Column>
        </Row>
    </section>
  </Layout>
);

