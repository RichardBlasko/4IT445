import React from 'react';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {BurgerMenu} from "../molecules/BurgerMenu";
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";

export const HeadBlock = ({category, descr}) => (
  <Layout className="wrapper pb-5 blue ">
    <BurgerMenu/>
    <Row className={"justify-content-center"}>
      <Column lg={10} md={10} sm={12} xs={12}>
        <Row>
          <Column sm={12} xs={12}>
            <Heading level={3} className="part-head">{category}</Heading>
            <Heading level={4} className="part-sub orange-text">{descr}</Heading>
          </Column>
        </Row>
      </Column>
    </Row>
  </Layout>
);
