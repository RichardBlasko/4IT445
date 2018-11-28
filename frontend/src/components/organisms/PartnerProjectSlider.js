import React from 'react';
import Carousel from 'nuka-carousel';

import {Layout} from '../atoms/Layout';
import {Heading} from "../atoms/Heading";
import {Row} from "../atoms/Row";
import {Column} from "../atoms/Column";
import {NavLink} from "../atoms/Nav/NavLink";
import {Button} from "../atoms/Button/Button";
import {FontIcon} from "../atoms/FontIcon";
import {EventCard} from "../molecules/EventCard";

import {EVENTS} from "../../mocks/Events";

export const PartnerProjectSlider = ({children}) => (
  <Layout className="part-60 wrapper pb-5 orange ">
    <Row className={"justify-content-center"}>
      <Heading level={3} className="part-head">Partnerské Projekty</Heading>
    </Row>
      <Row className={"justify-content-center"}>
      <Heading level={4} className="part-sub blue-text">Spolupráce je základ</Heading>
    </Row>
    <Row className={"justify-content-center"}>
    <Carousel
        autoplay={true}
        autoplayInterval={7000}
        cellSpacing = {10}
        width={"80%"}
        wrapAround = {true}
    >
      <img src = "/static/img/logo-avon.jpg"/>
      <img src = "/static/img/logo-lpr.png"/>
      <img src = "/static/img/logo-avon2.jpg"/>
      <img src = "/static/img/logo-loono.png"/>
      <img src = "/static/img/logo-stk.png"/>
      <img src = "/static/img/logo-loono2.png"/>
    </Carousel>
    </Row>
  </Layout>
);
