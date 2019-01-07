import React from 'react';
import Carousel from 'nuka-carousel';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Row} from "../atoms/Row";


export const PartnerProjectSlider = ({children}) => (
  <Layout className="part-60 wrapper pb-5 orange ">
    <Row className={"justify-content-center"}>
      <Heading level={3} className="part-head">Partnerské Projekty</Heading>
    </Row>
      <Row className={"justify-content-center"}>
      <Heading level={4} className="part-sub blue-text">Spolupráce je základ</Heading>
    </Row>
    <a href="/partneri">
    <Row className={"justify-content-center"}>
    <Carousel
        autoplay={true}
        autoplayInterval={7000}
        cellSpacing = {10}
        width={"80%"}
        wrapAround = {true}
    >
      <img src="/static/img/logo-avon.jpg" alt="logoavon"/>
      <img src="/static/img/logo-lpr.png" alt="logolpr"/>
      <img src="/static/img/logo-avon2.jpg" alt="logoavon2"/>
      <img src="/static/img/logo-loono.png" alt="logoloono"/>
      <img src="/static/img/logo-stk.png" alt="logostk"/>
      <img src="/static/img/logo-loono2.png" alt="logoloono2"/>
    </Carousel>
    </Row>
    </a>
  </Layout>
);
